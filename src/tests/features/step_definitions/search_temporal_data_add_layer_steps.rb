Dado('eu pesquiso por {string}') do |termo_pesquisa|
  find('input[placeholder="Pesquise por tema, camada, autor ou dados temporais:"]').set(termo_pesquisa)
end

Então('todos os resultados visiveis devem conter {string}') do |termo_pesquisa|
  elements = page.all('.box-layer-info')
  all_elements_contain_search = elements.all? { |element| element.text.include?(termo_pesquisa) }
  expect(all_elements_contain_search).to be true
end
