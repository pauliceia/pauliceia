import metaphone from "metaphonebr";

const isV2 = () => new URLSearchParams(location.search).get("search") === "v2";

export function searchPlaces(entries, query) {
  if (!query) {
    return entries;
  }

  // primeiro do jeito mais literal
  const typed = query.toLowerCase();
  const exact = entries.filter((entry) => entry.toLowerCase().includes(typed));

  if (exact.length > 0 || !isV2()) {
    return exact;
  }

  // tenta de novo ignorando acento e caixa dos dois lados
  const folded = fold(query);
  const unaccented = entries.filter((entry) => fold(entry).includes(folded));

  if (unaccented.length > 0) {
    return unaccented;
  }

  // se ainda não tiver resultados, compara o som em vez de letra
  return bySound(entries, query);
}

const bySound = (entries, query) => {
  const words = wordsOf(streetOf(query));

  // sem letra nem dígito não há o que codificar
  if (words.length === 0) {
    return [];
  }

  const codes = words.map((word) => metaphone(word));
  const finished = codes.slice(0, -1);
  const lastCode = codes[codes.length - 1];
  const lastWord = words[words.length - 1];

  // a última palavra pode estar pela metade, então também vale casar contra os
  // prefixos, desde que ela já diga algo: palavra curta ou código com dois
  // caracteres. sem isso a lista zera por várias teclas no meio de um nome
  const byStart = lastWord.length <= 3 || lastCode.length >= 2;

  const matched = entries.filter((entry) => {
    const { wordCodes, prefixCodes } = codesOf(entry);
    const hasCode = (code) =>
      wordCodes.some((other) => soundsLike(code, other));

    if (!finished.every(hasCode)) {
      return false;
    }

    if (hasCode(lastCode)) {
      return true;
    }

    return byStart && prefixCodes.has(lastCode);
  });

  // quem casa nas primeiras palavras vem antes. o * 100 põe o número de
  // palavras como desempate, favorecendo o nome mais curto
  const rank = (entry) => {
    const { wordCodes } = codesOf(entry);
    const sum = codes.reduce((total, code) => {
      const idx = wordCodes.findIndex((other) => soundsLike(code, other));
      return total + (idx < 0 ? wordCodes.length : idx);
    }, 0);

    return sum * 100 + wordCodes.length;
  };

  return matched.sort((a, b) => rank(a) - rank(b));
};

// o NFD separa a letra do acento, e o acento vira um caractere comum e apagável
const fold = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

// cada entrada é "nome, número, ano" e aqui só o nome interessa
const streetOf = (entry) => entry.split(",", 1)[0];

// depois do fold sobrou minúscula sem acento, então letra e dígito basta
const wordsOf = (street) => fold(street).match(/[a-z0-9]+/g) || [];

const soundsLike = (code, other) => {
  if (code === other) {
    return true;
  }

  // em código curto um caractere é metade da palavra
  if (code.length < 4 || other.length < 4) {
    return false;
  }

  return withinOneEdit(code, other);
};

const withinOneEdit = (a, b) => {
  if (a.length === b.length) {
    return [...a].filter((char, idx) => char !== b[idx]).length <= 1;
  }

  const [shorter, longer] = a.length < b.length ? [a, b] : [b, a];

  if (longer.length - shorter.length > 1) {
    return false;
  }

  // tirar um caractere do maior tem que dar exatamente o menor
  return [...longer].some(
    (_, idx) => longer.slice(0, idx) + longer.slice(idx + 1) === shorter,
  );
};

const prefixCodesOf = (word) =>
  [...word].map((_, idx) => metaphone(word.slice(0, idx + 1)));

const cache = new Map();

const codesOf = (entry) => {
  const street = streetOf(entry);

  if (!cache.has(street)) {
    const words = wordsOf(street);
    cache.set(street, {
      wordCodes: words.map((word) => metaphone(word)),
      prefixCodes: new Set(words.flatMap((word) => prefixCodesOf(word))),
    });
  }

  return cache.get(street);
};
