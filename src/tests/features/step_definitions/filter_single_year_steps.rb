include Capybara::DSL

Dado('a pagina incial') do
  visit('http://localhost:8080/portal/explore')
end

#armazena o estilo inicial da pagina para comparar com o novo mapa
@page_initial = page.evaluate_script('getComputedStyle(document.body).backgroundColor')

Quando('eu abro o menu de adicionar camadas') do
  #find('section.boxS button.btn i.md-icon-font', text: 'close').click
  find('p.btn_sidebar').click
  find('div.md-button-content img[src="/portal/static/img/add-layer.5bcee7e.png"]').find(:xpath, '..').click
end

E('adiciono a camada de {string}') do |camada|
  element = find('div.box-layer-info p', text: "TÍTULO: #{camada}").ancestor('.box-layer-info')
  element.find('button', text: "Ativar").click
  find('button[data-dismiss="modal"][aria-label="Close"]').click
end

#armazena o estilo com camada da pagina para comparar com o novo mapa
@page_with_layer = page.evaluate_script('getComputedStyle(document.body).backgroundColor')

E('no slider "Seleção de um espaço de tempo" seleciono {string} como maximo do periodo') do |ano|
  find('#slider').set("#{ano}")
end

Então('nao devo ver mais a camada que apresenta dados de 1900 ate 1950') do 
  new_background_color = page.evaluate_script('getComputedStyle(document.body).backgroundColor')
  expect(new_background_color).not_to eq(@page_with_layer)
end

E('no slider "Seleção de um único ano" seleciono {string}') do |ano|
  find('#slider1year').set("#{ano}")
end

Então('devo voltar a ver a camada de 1900 ate 1950') do 
  new_background_color = page.evaluate_script('getComputedStyle(document.body).backgroundColor')
  expect(new_background_color).not_to eq(@page_initial)
end
