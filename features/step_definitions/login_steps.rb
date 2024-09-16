require 'minitest/autorun'

Given('Estou na página de login') do
  visit '/portal/login'
end

When('Eu preencho as informações válidas') do
  fill_in 'E-mail', with: 'usuario_valido@example.com'
  fill_in 'Senha', with: 'senha123'
end

When('Eu preencho as informações inválidas') do
  fill_in 'E-mail', with: 'usuario_inexistente@example.com'
  fill_in 'Senha', with: 'senha123'
end

And('Eu clico em "Entrar"') do
  Capybara.current_session.driver.browser.manage.window.resize_to(1920, 1080)
  button = find_button('Entrar', match: :first)
  button.click
  sleep(8)
end

Then('o login é bem-sucedido e eu sou redirecionado para a página inicial') do
  expect(current_path).to eq('/portal/explore')
end

Then('o login é negado e eu recebo um aviso de erro') do
  expect(current_path).to eq('/portal/login')
  expect(page.has_css?('.el-message-box'))
  expect(find('span', text: 'ERROR'))
end
