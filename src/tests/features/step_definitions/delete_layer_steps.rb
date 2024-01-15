Dado('que estou na página do painel') do
  
  visit('http://localhost:8080/portal/explore')

  #login
  find('a[href="/portal/login"]').click
  page.fill_in('E-mail', with: 'admin@admin.com')
  page.fill_in('Senha', with: 'admin')
  find('button[type="submit"]', text: 'Entrar').click

  find(".md-avatar").click

  find(:xpath, "//a[@href='/portal/dashboard']").click
end
  
Quando('eu seleciono o botão de remoção da camada que quero excluir') do
  sleep(1)
  elements = find_all(".add2")
  @countEls = elements.length
  elements[0].click
end

Então('eu devo ver um pop-up pedindo a confirmação de remoção') do
  expect(page).to have_css('.el-message-box__header', visible: true)
end

Quando('eu clico no botão de confirmação') do
  find('.el-button--primary').click
end

Então('a camada é excluída') do
  sleep(1)
  elements = find_all(".add2")
  expect(elements.length == @countEls).to be false
end

Quando('eu clico no botão de cancelamento da remoção') do
  find('span', :text => 'Cancelar')
end

Então('a camada não é excluída') do
  sleep(1)
  elements = find_all(".add2")
  expect(elements.length == @countEls).to be true
end