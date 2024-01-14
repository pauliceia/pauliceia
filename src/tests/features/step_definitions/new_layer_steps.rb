require 'date'

Dado('que estou na página de criar uma nova camada, preencho as informações dela e envio') do

  visit('http://localhost:8080/portal/explore')

  #login
  find('a[href="/portal/login"]').click
  page.fill_in('E-mail', with: 'admin@admin.com')
  page.fill_in('Senha', with: 'admin')
  find('button[type="submit"]', text: 'Entrar').click

  find(".md-avatar").click

  find(:xpath, "//a[@href='/portal/dashboard']").click
  find(:xpath, "//a[@href='/portal/dashboard/newLayer']").click

  # preenchimento do nome
  fill_in('Nome', with: "Camada"+DateTime.now.strftime('%s')) 

  # escolha da palavra chave
  dropdown = all('.dropdown.v-select.searchable').first
  dropdown.click

  within(dropdown) do
    find('.dropdown-menu').click
  end

  # uploado do arquivo
  find('input#Upload', visible: false).set(SUPPORT_TESTING[:pathFileShapefile]) # upload do arquivo

  # clica em Enviar
  find('button', :text=>'Enviar').click
end


Quando('que eu preencho os dados de forma coerente') do
  sleep(5)
  fill_in('Data inicial', with: '01011901')
  fill_in('Data final', with: '01012002')
end

E('clico em {string}') do |string|
  find('a', :text => string).click
end

Então('eu devo ver um pop-up informando que a camada foi adicionada com sucesso') do
  find('p', :text=>'A camada foi adicionada com sucesso!')
end

Quando('que eu preencho os dados em que a data final da camada excede a data atual do preenchimento') do
  sleep(5)
  fill_in('Data inicial', with: '01011901')
  fill_in('Data final', with: '01012050')
end

Então('eu devo ver um pop-up informando que não é possível enviar a camada') do
  find('p', :text=>'A data final não pode ser posterior à data atual. Não é possível adicionar a camada.')
end
