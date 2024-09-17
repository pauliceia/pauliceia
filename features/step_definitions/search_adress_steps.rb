require 'minitest/autorun'

Given('Estou na página do mapa') do
  visit '/portal/explore'
  Capybara.current_session.driver.browser.manage.window.resize_to(1920, 1080)
  button_error = find_button('OK', match: :first)
  button_error.click
end

When('Eu preencho um endereço e ano de busca válidos') do
  input_adress_component =  find("input[placeholder='nome da rua, número, ano']")
  input_adress_component.set('alameda barao de piracicaba, 34, 1908')
end

When('Eu preencho um endereço e ano de busca inválidos') do
  input_adress_component =  find("input[placeholder='nome da rua, número, ano']")
  input_adress_component.set('rua nao encontrada 1000, 1950')
end

And('Eu clico em "Pesquisar"') do
  button = find_button('Pesquisar', match: :first)
  button.click
end

Then('A localização é indicada no mapa junto com a legenda') do
  expect(find('p', text: 'Encontrado'))
end

Then('A localização não é indicada no mapa nem a legenda') do
  expect(page).not_to have_selector('p', text: 'Encontrado')
end
