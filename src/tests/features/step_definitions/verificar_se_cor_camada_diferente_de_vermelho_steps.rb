def clicar_acao_camada(acao, camada)
  element = find('div.box-layer-info p', text: "TÍTULO: #{camada}").ancestor('.box-layer-info')
  element.find('button', text: "#{acao}").click
end

Dado("que estou na página de mapa, abri o seletor de camadas e ativei as camadas {string} e {string}") do |camada, camada2|
  puts "Camada 1: #{camada}"
  puts "Camada 2: #{camada2}"
 
  steps %Q{
    Dado que estou na página de mapa com o popup de bem-vindo fechado
    Quando abro o seletor de camadas
    E eu clico no botão "Ativar" da camada "#{camada2}"
    E eu clico no botão "Ativar" da camada "#{camada}"
    E eu clico no icone de fechar
    Então eu devo ver 2 elementos com a classe 'move-icon' na página 
  }
end

Quando('eu clico no botão de configurações da camada posicionada na posicao {int}') do |posicao|
  xpath_expression = "(//button[@class='btn-view']/i[@class='md-icon md-icon-font md-theme-default'])[#{posicao}]"
  btn = find(:xpath,xpath_expression)
  btn.click
end

Então("vejo que as cores são diferentes") do
  # Encontra os dois elementos com a classe el-color-picker__color-inner
  elementos = all('.el-color-picker__color-inner')

  elemento1 = find(:xpath,"(//span[@class='el-color-picker__color-inner'])[1]")
  elemento2 = find(:xpath,"(//span[@class='el-color-picker__color-inner'])[2]")

  background1 = elemento1.style('background-color')
  background2 = elemento2.style('background-color')

  expect(background1).not_to eq(background2)
end


Então("eu devo ver {int} elementos com a classe {string} na página") do |quantidade, classe|
  elementos = page.all(".#{classe}")
  expect(elementos.count).to eq(quantidade)
end

Quando('eu clico no botão {string} da camada {string}') do |acao, camada|
  clicar_acao_camada(acao, camada)
end

Quando('eu clico no icone de fechar') do
  find('button[data-dismiss="modal"][aria-label="Close"]').click
end