import termsPT from './termsPT-BR'

export default {
    "nav": {
        "home": "Home",
        "map": "Mapa",
        "team": "Equipe",
        "contact": "Contato",
        "about": "Sobre",
        "login": "Entrar",
        "profile": "Meu Perfil",
        "dashboard": "Painel",
        "logout": "Sair",
        "msgLogout": "Até breve!"
    },
    "main": {
        "developedBy": "Desenvolvido por INPE"
    },
    "dashboard": {
        "nav": {
            "home": "Inicio",
            "infos": "Informações",
            "newLayer": "Nova Camada",
            "keywords": "Palavras-chave",
            "layer": "Camadas"
        },
        "home":{
            "dashboard": "Painel de Controle",
            "notifications": "Notificações",
            "myLayers": "Minhas Camadas",
            "sharedLayers": "Camadas Compartilhadas"
        },
        "newLayer": {
            "name": "Nome",
            "keywords": "Palavras-chave",
            "collaborators": "Colaboradores",
            "description": "Descrição",
            "reference": "Referência",
            "addedReferences": "Referências Adicionadas",
            "add": "Adicionar Referência",
            "submit": "Enviar",
            "fileInput": "Arquivo de Entrada",
            "zipFile": "Arquivo ZIP",
            "nameD": "Nome da camada. Ela é única no sistema.",
            "keywordsD": "Palavra-chave é uma etiqueta/rótulo relacionado a camada, que indica qual tipo ela pertence, como ruas, endereços, crimes e etc.",
            "collaboratorsD": "Colaboradores são as pessoas que poderão adicionar, editar ou remover os vetores da camada. Vetores são as geometrias da camada, como um ponto, linha ou polígono. Apenas o criador da camada pode editar este campo por segurança!",
            "descriptionD": "Descrição é uma descrição/informação sobre a camada.",
            "referenceD": "Referência é a fonte daquele dado, se ele é de um livro, artigo, dissertação ou etc. Ele deve estar no formato ABNT.",
            "epsgD": "É a projeção do Shapefile, um número inteiro, por exemplo 4326.",
            "fileInputD": "O arquivo que será inserido é um arquivo compactado ZIP que contém o Shapefile para ser enviado. Dentro deste arquivo ZIP deve conter todos os arquivos de um Shapefile, como o “.shp”, “.prj”, “.dbf” e etc.",
            "zipFileD": "Arquivo ZIP",
            "chooseFile": "Escolha o arquivo",
            "temporalColumns": "Dados Temporais",
            "lblStartDate": "Data inicial",
            "lblEndDate": "Data final",
            "lblStartDateColumn": "Coluna da data inicial",
            "lblEndDateColumn": "Coluna da data final",
            "lblStartDateMask": "Máscara da data inicial",
            "lblEndDateMask": "Máscara da data finial",
            "startDate": "Data inicial do bounding box temporal da camada. É a data inicial do período que abrange os dados da camada. Por exemplo: a camada tem o período de 01-01-1900 à 31-12-1930. Logo a data inicial é 01-01-1900.",
            "endDate": "Data final do bounding box temporal da camada. É a data final do período que abrange os dados da camada. Por exemplo: a camada tem o período de 01-01-1900 à 31-12-1930. Logo a data final é 31-12-1930.",
            "startDateColumn": "Indica qual coluna contém a data inicial da camada.",
            "endDateColumn": "Indica qual coluna contém a data final da camada.",
            "startDateMask": "Indica qual é a máscara usada pela data inicial da camada.",
            "endDateMask": "Indica qual é a máscara usada pela data final da camada.",
            "mountLayer": {
                "btnRadio": {
                    "import": "IMPORTAR ARQUIVO",
                    "create": "CRIAR CAMADA VAZIA"
                },
                "lblAttr": "Atributos",
                "lblAttrD": "Adicione os atributos da nova camada. NÃO pode: começar com números, ter acentuação, caracteres especiais, espaços em brancos e ser nome reservado.",
                "boxAttr": {
                    "lblColumnName": "Nome da coluna",
                    "lblColumnType": "Tipo da Coluna",
                    "msgAlertRemove": "Tem certeza que deseja excluir a coluna?",
                    "btnAlert": {
                        "no": "não",
                        "yes": "SIM"
                    }
                }
            }
        },
        "editLayer": {
            "delete": "Deletar",
            "layer": "Edição Camada",
            "editLayer": "Editar Camada"
        },
        "keywords":{
            "keywords": "Palavras-chave",
            "newKeyword": "Nova Palavra-Chave",
            "myKeywords": "Minhas Palavras-Chave",
            "nameD": "Nome da nova palavra-chave. Ela é única no sistema.",
            "name": "Nome"
        }
    },
    "login": {
        "inputEmail": "E-mail",
        "inputPassword": "Senha",
        "register": "Registre-se agora",
        "btnText": "Entrar",
        "terms": "Se você fizer login via rede social, estará automaticamente concordando com os termos do projeto.",
        "lbReadme": "leia os termos aqui",
        "msg": {
            "success": "BEM-VINDO",
            "err404": "<strong>E-mail</strong> ou <strong>senha</strong> incorreta!",
            "err409": "Você ainda <strong>não confirmou seu e-mail</strong>, acesse sua caixa de e-mail e confirme-o seguindo instruções!"
        }
    },
    "home":{
      "title1": "O que é?",
      "title2": "Como?",
      "title3": "Quando ficará pronta?",
      "title4": "Como citar uma camada?",
      "example": "Exemplo",
      "column1": "A Pauliceia 2.0 é uma plataforma que tem o objetivo de fazer o mapeamento colaborativo da história de São Paulo no período de 1870 a 1940.",
      "column2": `Por meio da interface da plataforma, pesquisadores e estudiosos da cidade podem alimentar os seus dados, desde que sejam espacialmente localizáveis.<br>
          Dessa forma, uma base cartográfica histórica da cidade será enriquecida a cada alimentação, tornando esses dados também disponíveis a todos.<br>
          Por outro lado, o usuário que colaborar terá dessa forma um mapa ou uma visualização de sua própria pesquisa.`,
      "column3": "Uma versão beta está atualmente disponível para teste. A versão final está prevista para janeiro de 2022.",

    },
    "contact":{
      "title1": "Mapeamento colaborativo da história de São Paulo (1870 a 1940).",
      "contact": "Entre em contato:",
      "links": "LINKS ÚTEIS",
      "institutional": "Institucionais",
      "platforms": "Plataformas / Softwares Livres",
      "base": "Base Cartográfica",
      "envolvidos": {
        "arquivo_publico_sp": "Arquivo Público do Estado de SP",
        "emory_university": "Emory University",
        "fapesp": "Fundação de Amparo a Pesquisa de SP",
        "himaco": "Hímaco",
        "inpe": "Instituto Nacional de Pesquisas Especial (INPE)",
        "unifesp": "Universidade Federal de SP (UNIFESP)",
      },
    },
    "about":{
      "title1": "Quem desenvolveu?",
      "title2": "Quem financiou?",
      "title3": "Qual tecnologia utilizada?",
      "title4": "Realização:",
      "title5": "Apoio:",
      "title6": "Financiamento:",
      "title7": "Quem somos?",
      "text1": `O projeto é uma parceria entre a UNIFESP (campi de Guarulhos e São José dos Campos), o Arquivo do Estado de SP, o INPE (Instituto Nacional de Pesquisas Espaciais) e a Emory University (Estados Unidos). <br> Mas a concepção de “ciência aberta” que orienta o projeto faz dele uma iniciativa amigável à participação de todos os interessados em diversas etapas de sua execução.`,
      "text2": "O projeto foi um dos 4 contemplados pela chamada eScience 2016 da FAPESP (Fundação de Amparo a Pesquisa do Estado de São Paulo), que estimula a colaboração entre as ciências da computação e outras áreas de conhecimento.",
      "text3": `A Pauliceia 2.0 é uma plataforma de código aberto, base web e orientada a serviços. Ela foi implementada usando a biblioteca GIS TerraLib e o geoportal TerraBrasilis desenvolvido pelo INPE. <br>
                A equipe também utiliza o software gvSIG, alternativa livre a aberta de SIG. <br>
                A plataforma foi implementada com base no conceito de Single Page Application (SPA) usando a estrutura Vue.js desenvolvido em linguagem JavaScript e as ferramentas jQuery e OpenLayers.`,
      "name1": "Luís Ferla - coordenador",
      "desc1": "Luis Ferla é professor de história contemporânea da UNIFESP. Nessa Universidade, coordena o grupo de pesquisas Hímaco (História, mapas e computadores) e o lab.hum (Laboratório de Humanidades Digitais). Juntamente com Karla Donato Fook, é um dos coordenadores do projeto. ",
      "name2": "Karine Reis Ferreira",
      "desc2": "Karine Reis Ferreira é doutora em Computação Aplicada pelo INPE, onde trabalha com pesquisa em GeoInformática e desenvolvimento de sistemas de informações geográficas. É docente do curso de pós-graduação em Computação Aplicada (CAP) do INPE e sua principal linha de pesquisa é representação, processamento e análise de grandes volumes de dados espaço-temporais. Ela foi coordenadora do projeto Pauliceia de 2016 até 2019.",
      "name3": "Andrew Graham Britt",
      "desc3": "Andrew G. Britt é historiador da América Latina com foco na história do Brasil. Atualmente é um Postdoctoral Fellow na Northwestern University em Evanston, IL. É um dos integrantes do projeto.",
      "name4": "Ana Maria Alves Barbour",
      "desc4": "Ana Maria Barbour é jornalista, historiadora e mestranda em História pela Unifesp. É colaboradora do projeto Pauliceia 2.0.",
      "name5": "Cíntia Rodrigues de Almeida",
      "desc5": "Cintia Rodrigues de Almeida é graduanda em História na UNIFESP e bolsista de Iniciação Científica pela FAPESP.",
      "name6": "Carlos Alberto Noronha",
      "desc6": "Carlos Noronha, aluno de IC no INPE e desenvolvedor de software com ênfase em sistemas web.",
      "name7": "Cristiane Regina Myiasaka",
      "desc7": "Cristiane Miyasaka é doutora em História (IFCH/Unicamp). É integrante do Hímaco (Unifesp). Coordena a equipe responsável pelo banco de dados de endereços históricos.",
      "name8": "Daniela Leal Musa",
      "desc8": "Daniela Musa é docente da área de Ciência da Computação no Instituto de Ciência e Tecnologia da Unifesp. Sua área de pesquisa é Banco de Dados, Web Semântica e dados espaço-temporal.",
      "name9": "Ester Dantas Reis Nunes",
      "desc9": "Ester Reis, estudante de História na EFLCH/UNIFESP, bolsista FAPESP sobre o uso de Sistemas de Informações Geográficas (SIG) em investigações históricas.",
      "name10": "Denis Taveira de Lima",
      "desc10": "Denis Taveira é estudante de Engenharia da Computação na UNIFESP e bolsista de Iniciação Cientifica no INPE pela FAPESP. É um dos responsáveis pelo desenvolvimento da plataforma web da Pauliceia 2.0.",
      "name11": "Fernando Atique",
      "desc11": "Fernando Atique é Arquiteto e Urbanista. Professor de História, Espaço e Patrimônio Edificado na EFLCH/UNIFESP. Colaborou com o levantamento de dados históricos e espaciais.",
      "name12": "Eduardo de Souza Goiabeira",
      "desc12": "Eduardo Goiabeira é graduado em História pela EFLCH/UNIFESP. Ele contribuiu para a criação do banco de dados de numeração do projeto.",
      "name13": "Jeffrey Lesser",
      "desc13": "Jeffrey Lesser é um históriador do Brasil e diretor  do Instituto Halle de Pesquisa Global da Universidade Emory, e parceiro internacional do Projeto apoiado pela FAPESP.",
      "name14": "Gabriel Sansigolo",
      "desc14": "Gabriel Sansigolo é mestrando em Computação Aplicada, Tecnólogo em Análise e Desenvolvimento de Sistemas e Técnico em Informática Web.",
      "name15": "Luanna M. do Nascimento",
      "desc15": "Luanna Nascimento é graduanda em História na UNIFESP e bolsista de Iniciação Científica pela FAPESP no Projeto Pauliceia 2.0.",
      "name16": "Gilberto Ribeiro de Queiroz",
      "desc16": "Gilberto é Professor Associado em Geoinformática no INPE, possui doutorado em Computação Aplicada. No projeto Pauliceia 2.0 está envolvido no projeto conceitual da plataforma computacional.",
      "name17": "Monaliza Caetano",
      "desc17": "Monaliza Caetano é historiadora, graduada através da Universidade Federal de São Paulo. É uma das bolsistas do Projeto aprovado na FAPESP.",
      "name18": "Nandamudi Vijaykumar",
      "desc18": "N. L. Vijaykumar (Vijay) tem experiência em Engenharia de Software, testes baseados em modelos e avaliação de desempenho. É colaborador aposentado e voluntário do Laboratório de Computação e Matemática Aplicada (LAC) do Instituto Nacional de Pesquisas Espaciais (INPE).",
      "name19": "Orlando Guarnier Farias",
      "desc19": "Orlando Guarnier é estudante de história da EFLCH/UNIFESP e membro do grupo Hímaco.",
      "name20": "Rodrigo Mariano",
      "desc20": "Rodrigo Mariano é Analista e Desenvolvedor de Sistemas, e mestre em Computação Aplicada pelo INPE na área de Geocomputação. Sua principal atividade no projeto é no desenvolvimento do serviço de gerenciamento dos dados da plataforma, desde o controle de usuários, camadas, manipulação dos dados espaço-temporais, até o controle das notificações e denúncias. Ele é o atual responsável pela manutenção da plataforma.",
      "name21": "Priscila Machado Meireles",
      "desc21": "Priscila Meireles é Arquiteta e Urbanista, Especialista em Design Gráfico. Como colaboradora do projeto desenvolveu os elementos de Identidade Visual, que contemplam a criação da marca “Pauliceia 2.0”, além do web design: site e plataforma.",
      "name22": "Thomas Rogers",
      "desc22": "Thomas Rogers é historiador, professor de história na Universidade Emory. Ele co-coordenou a bolsa SPRINT, de FAPESP, para Emory e UNIFESP.",
      "name23": "Vitória Martins Fontes da Silva",
      "desc23": "Vitória Martins Fontes é graduada em história pela UNIFESP. Participa das atividades do grupo Hímaco e desde 2018 compõe a equipe desenvolvedora do Pauliceia 2.0. No projeto, fez parte do grupo responsável pelo banco de dados da numeração da plataforma e atualmente produz material de apoio para utilização do Pauliceia e integra o grupo que implementa a região do Bom Retiro.",
      "name24": "Wania Mazzarello",
      "desc24": "Wania possui licenciatura em história. Atua como pesquisadora, consultora e professora. Possui interesse de pesquisa em história urbana, identidade, memória e tecnologia. No Projeto, atua na equipe que viabiliza a introdução da área do Pari no escopo da plataforma.",
      "name25": "Gabriel dos Reis",
      "desc25": "Gabriel dos Reis é graduando em Análise e Desenvolvimento de Sistemas pelo Instituto Federal da Bahia. Tendo ingressado no Projeto em uma experiência no ano 2020, busca auxiliar o Pauliceia nos aspectos que puder, sejam eles computacionais ou não.",
      "name26": "Karla Donato Fook - coordenadora",
      "desc26": "Karla Donato Fook é professora do Instituto Tecnológico de Aeronáutica (ITA). Suas áreas de interesse na Pesquisa incluem Geoinformação e Engenharia de Software. No Projeto Pauliceia 2.0 ela está envolvida com o gerenciamento da plataforma computacional.",
      "name27": "Aracele Torres",
      "desc27": "Aracele Torres é doutora em História pela USP, atuando na área de História da Ciência e da Tecnologia, com foco em ciências e tecnologias abertas. É membro do Hímaco (História, Mapas e Computadores) e do lab.hum (Laboratório de Humanidades Digitais) da UNIFESP/Guarulhos. Faz contribuições técnicas para o projeto, além de contribuir como pesquisadora.",
      "name28": "Raphael Augusto de Oliveira Silva",
      "desc28": "Raphael Augusto de Oliveira Silva é graduado em História pela UNIFESP. Atualmente é aluno de Engenharia da Computação da UNIVESP. Suas contribuições são tanto para a manutenção do Portal como também para o desenvolvimento das pesquisas.",

    },
    "register": {
        "title": "Cadastrar",
        "lbName": "Nome",
        "lbEmail": "E-mail",
        "lbUsername": "Nome de usuário",
        "lbPassword": "Senha",
        "lbCheckNotification": "Receber notificações por e-mail",
        "lbCheckAgree": "Eu concordo com os termos de uso.",
        "lbReadme": "leia os termos aqui",
        "btnTitle": "Cadastrar",
        "lbToLogin": "Você já está cadastrado?",
        "lbToLoginLink": "CLIQUE AQUI",
        "msg": {
            "registerBtnHover": "Você deve aceitar os Termos de Uso para se registrar!",
            "success": "O teu cadastro está quase pronto. Basta acessar o teu e-mail e seguir as instruções.",
            "emptyField": "ERRO: complete todos os campos!",
            "err500": "Erro no servidor interno - entre em contato com o administrador",
            "err409": "<strong>E-mail</strong> ou <strong>nome de usuário</strong> já existe em nosso sistema."
        }
    },
    "validEmail": {
        "msgSuccess": "Olá, seu e-mail foi validado com <strong>sucesso</strong>! Agora é só realizar o <i>login</i> para acessar o sistema.",
        "msgErr": "Erro ao efetuar a validação do seu E-mail. Link inválido!"
    },
    "validSocial": {
        "msgSuccess": "BEM-VINDO",
        "msgErr": "Erro ao efetuar o login. Link inválido!"
    },
    "map":{
        "geocoding": {
            "form":  {
                "search": "Procure um endereço",
                "geocoding": "Procure por endereços via CSV"
            },
            "placeholder": "nome da rua, número, ano",
            "btnText": "Pesquisar",
            "popupInfo": {
                "search": `
                    Para procurar um endereço, digite-o seguindo a estrutura nome da rua, número (apenas números), ano (apenas números). <br><strong>Ex: rua da consolaçao, 42, 1931</strong>
                `,
                "geocoding": `
                    <b>1° Passo:</b> Verifique se o seu arquivo CSV se encontra conforme o padrão.<br>
                    <b>Padrão:</b> Primeira linha de cabeçalho, endereços escritos por extenso na primeira coluna, um por linha, seguindo a estrutura nome da rua, numera, ano<br>
                    <b>2° Passo:</b> Através do botão Procurar, selecionando o seu arquivo CSV, visualizar no mapa os endereços encontrados.<br>
                    <b>3° Passo:</b> Através do botão Download, é possível baixar os dados encontrados, em formato Shapefile.
                `
            },
            "label": {
                "title": "Legenda",
                "found": "Encontrado",
                "geocoded": "Geocodificado",
                "extrapolated": "Extrapolado"
            }
        },
        "sidebarLayer": {
            "title": "Camadas",
            "btnAdd": "Adicionar e remover camadas",
            "options": {
                "zoom": "Zoom",
                "infosLayer": "Informações da camada",
                "infosVector": "Informações sobre os objetos",
                "editColor": "Mudar a cor",
                "download": "Baixar .shp"
            },
            "msgEmpty": "Adicione as camadas para a visualização no mapa!"
        },
        "sidebarEdit": {
            "title": "Editor"
        },
        "addLayer": {
            "title": "Adicionar e remover camadas",
            "input": "Pesquise por tema, camada ou autor:",
            "close": "Fechar",
            "box": {
                "lbTitle": "TÍTULO",
                "lbAuthors": "AUTORES",
                "lbKeywods": "PALAVRAS-CHAVE"
            },
            "btns": {
                "active": "Ativar",
                "disable": "Desativar"
            },
            "msg": {
                "errTitle": "Erro Interno",
                "errMsg": "Serviço indisponível, tente mais tarde ou comunique nosso suporte!"
            }
        },
        "viewInfo": {
            "btnFollow": "Seguir Camada",
            "btnUnFollow": "Deixar de Seguir Camada",
            "lbTitle": "TÍTULO",
            "lbDescription": "DESCRIÇÃO",
            "lbKeywods": "PALAVRAS-CHAVE",
            "lbAuthors": "AUTORES",
            "lbDate": "DATA DE CRIAÇÃO",
            "lbReferences": "REFERÊNCIAS",
            "lbNotifications": "Notificações"
        },
        "viewInfoVector": {
            "title": "Selecione as informações",
            "btnFeature": "Por localização",
            "btnBox": "Por região",
            "btnClean": "Limpar"
        },
        "betaVersionModal": {
            "welcome": "Bem-vindo a plataforma `Pauliceia 2.0`",
            "betaVersion": "VERSÃO BETA (fase de teste)",
            "body": `
                    <p style="text-align: justify">
                        Informamos que atualmente está disponível uma <b> versão beta para testes da plataforma. </b><br>
                        Explore o mapa, pesquise e insira dados. <br>
                        Qualquer dúvida, sugestão ou erro que porventura seja detectado durante sua navegação, solicitamos que, por gentileza,
                        nos reporte por e-mail que está na aba "Contatos", para que possamos juntos construir uma ferramenta melhor. <br>
                        Por favor, se acontecer algum problema na plataforma, reporte no e-mail e descreva-o detalhadamente, anexando o CSV, o Shapefile,
                        imagem, print-screen ou outro arquivo usado ou desejado, para facilitar o rastreio do problema por parte da equipe. Além de que, adicionar o dia, hora e minuto do ocorrido, se possível. <br>
                        Informamos ainda que, por estarmos na fase de testes, pode ser que nós limpemos o banco, fazendo com que você perca o seu usuário e seus dados.
                        Isto é feito para melhor compatibilidade das novas funções que são criadas.
                        Pedimos a sua compreensão em relação a isso, para que se registre novamente. <br>
                        Agradecemos sua compreensão e contribuição.
                    </p>`,
            "footnote": "Equipe Pauliceia 2.0"
        }
    },
    "terms": {
        "title": "TERMOS DE USO",
        "text": termsPT
    }
}
