require 'minitest/autorun'

Given('Estou na página de registro') do
  visit '/portal/register'
end

When('Eu deixo de preencher algum campo:') do |table|
  table.hashes.each do |row|
    fill_in 'Nome', with: (row['Nome'] == 'Vazio') ? '' : row['Nome']
    fill_in 'E-mail', with: 'emailValido@gmail.com'
    fill_in 'Nome de usuário', with: (row['NomeDeUsuario'] == 'Vazio') ? '' : row['NomeDeUsuario']
    fill_in 'Senha', with: (row['Senha'] == 'Vazio') ? '' : row['Senha']
    fill_in 'Confirme a senha', with: (row['ConfirmeSenha'] == 'Vazio') ? '' : row['ConfirmeSenha']
  end
  check('Eu concordo com os termos de uso.', allow_label_click: true)
end

When('Eu preencho com informações inválidas:') do |table|
  table.hashes.each do |row|
    fill_in 'Nome', with: row['Nome']
    fill_in 'E-mail', with: 'emailValido@gmail.com'
    fill_in 'Nome de usuário', with: row['NomeDeUsuario']
    fill_in 'Senha', with: row['Senha']
    fill_in 'Confirme a senha', with: row['ConfirmeSenha']
  end
  check('Eu concordo com os termos de uso.', allow_label_click: true)
end

And('Eu clico no botão "Cadastrar"') do
  Capybara.current_session.driver.browser.manage.window.resize_to(1920, 1080)
  button = find_button('Cadastrar', match: :first)
  button.click
  sleep(8)
end

Then('Aparece o erro: {string}') do |errorMessage|
  expect(page).to have_content(errorMessage)
end

Then('Aparece {string}') do |errorMessage|
  expect(page).to have_content(errorMessage)
end

