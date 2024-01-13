Dado('que eu esteja na tela de explorar o mapa') do
    visit('http://localhost:8080/portal/explore')
    find("#close-alert").click
end

Quando('eu clico no ícone de download') do
    find('#download-map').click
end

Então('deve aparecer uma tela com os botões {string} e {string}') do |button1, button2|
    find("button", :text => button1)
    find("button", :text => button2)
end
# E('clico em "Mapa de fundo"') do
#     find('#download-background-map').click
# end

# E('clico em "Sim"') do
#     find("#ok-button").click
# end

# Então("deve abrir uma nova aba com o mapa selecionado") do
#     page.driver.browser.switch_to.window(page.driver.browser.window_handles.last)
# end
  