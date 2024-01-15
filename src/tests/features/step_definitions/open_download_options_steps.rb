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