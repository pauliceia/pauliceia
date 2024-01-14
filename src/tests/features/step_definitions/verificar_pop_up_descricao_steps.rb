Dado('que estou na página de mapa com o popup de bem-vindo fechado') do
  # local: http://0.0.0.0:8080/portal/explore
  # https://pauliceia.unifesp.br/portal/explore
  visit('http://localhost:8080/portal/explore')
  find('section.boxS button.btn i.md-icon-font', text: 'close').click
end

Quando('abro o seletor de camadas') do
  find('p.btn_sidebar').click
  find('div.md-button-content img[src="/portal/static/img/add-layer.5bcee7e.png"]').find(:xpath, '..').click
end

E("clico no botão {string}") do | buttonText | 
  page.find_all("span", :text => buttonText)[0].click
end

Então ('eu vejo o popup da descrição') do 
  find(".v-modal")
end
