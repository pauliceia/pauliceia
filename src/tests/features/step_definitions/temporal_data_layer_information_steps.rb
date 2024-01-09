Dado('adicione a camada {string} a visualização') do |camada|
  element = find('div.box-layer-info p', text: "TÍTULO: #{camada}").ancestor('.box-layer-info')
  element.find('button', text: "Ativar").click
end

Quando('eu clico no botão de ver informações da camada {string}') do |camada|
  find('i.md-icon', text: 'assignment').click
end

E('fecho a tela de adicionar e remover camadas') do
  find('button[data-dismiss="modal"][aria-label="Close"]').click
end

Então('eu devo ver a informação temporal {string} no menu de informações da camada {string}') do |informacao_temporal, camada|
  expect(page).to have_content(informacao_temporal)
end

Quando('eu clico no botão de configurações da camada {string}') do |camada|
  layer = find('span', text: "#{camada}")
  settings = layer.find('button.btn-view i.md-icon', text: 'settings')
  settings.click
end
