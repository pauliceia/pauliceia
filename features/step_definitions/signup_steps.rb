require 'minitest/autorun'

# Given('Estou na página de login') do
#   visit '/portal/login'
# end

When('Eu escolho me registrar') do
  Capybara.current_session.driver.browser.manage.window.resize_to(1920, 1080)
  click_link 'Registre-se agora'
end

And('Eu preencho informações válidas') do
  fill_in 'Nome', with: 'teste'
  fill_in 'E-mail', with: 'teste@gmail.com'
  fill_in 'Nome de usuário', with: 'teste'
  fill_in 'Senha', with: '123'
  check('Eu concordo com os termos de uso.', allow_label_click: true)
end

And('Eu clico em "Cadastrar"') do
  Capybara.current_session.driver.browser.manage.window.resize_to(1920, 1080)
  button = find_button('Cadastrar', match: :first)
  button.click
  sleep(8)
end

# cenario 'infeliz'
And('Não há conexão com o servidor interno') do
  expect(page.has_css?('.el-message-box'))
  expect(find('span', text: 'ERROR'))
end

