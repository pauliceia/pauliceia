Quando('eu filtro pelo autor {string}') do |author|
  input_element = find('input[aria-label="Search for option"]')
  input_element.set(author)
  find('.dropdown-menu', text: author).click
end

Então('todos os resultados visiveis devem conter {string} ou {string}') do |termo_pesquisa1, termo_pesquisa2|
  elements = all('.box-layer-info')

  all_elements_contain_search = elements.all? do |element|
    element.text.include?(termo_pesquisa1) || element.text.include?(termo_pesquisa2)
  end

  expect(all_elements_contain_search).to be true
end
