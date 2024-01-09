Dado('que eu esteja na tela de adicionar e remover camadas') do
  visit('http://localhost:8080/portal/explore')
  find('p.btn_sidebar').click
  find('div.md-button-content img[src="/portal/static/img/add-layer.5bcee7e.png"]').find(:xpath, '..').click
end
Então('eu devo ver a informação temporal {string} na camada {string}') do |informacao_temporal, camada|
    expect(page).to have_content(informacao_temporal)
end
