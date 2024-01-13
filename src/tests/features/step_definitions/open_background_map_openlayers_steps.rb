Dado('que eu esteja na tela de opções de download') do
    visit('http://localhost:8080/portal/explore')
    find("#close-alert").click
    find('#download-map').click
end

Quando('há um mapa de fundo selecionado') do
    find('p.btn_sidebar').click
    find(:xpath, '(//div[@class="el-switch is-checked"])[2]')
end

Quando('não há um mapa de fundo selecionado') do
    find('p.btn_sidebar').click
    find(:xpath, '(//div[@class="el-switch is-checked"])[2]').click
end

E('eu clico no botão {string}') do | buttonText |
    find("button", :text => buttonText).click
end

E("clico em {string}") do | buttonText |
    find(".popup-modal")
    find("button", :text => buttonText).click
end

Então("o popup de confirmação deve sumir") do
    find(".fade-leave-to")
end

Então("deve abrir uma nova aba do OpenLayers") do
    page.driver.browser.switch_to.window(page.driver.browser.window_handles.last)
end

Então("deve aparecer uma mensagem de erro") do 
    find(".el-message-box")
end