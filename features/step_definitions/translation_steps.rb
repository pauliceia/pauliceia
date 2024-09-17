require 'minitest/autorun'

Given('Estou na página inicial') do
  visit '/portal/home'
end

And('O site tem está em {string}') do |lingua_atual|
  if(lingua_atual == "portugues")
    all('.md-svg-loader')[0].click
  else
    all('.md-svg-loader')[1].click
  end
end

When('Eu clico na bandeira {string}') do |bandeira|
  if(bandeira == "eua")
    all('.md-svg-loader')[1].click
  else
    all('.md-svg-loader')[0].click
  end
end

Then('O conteúdo da página deve ser traduzido para {string}') do |lingua_traduzida|
  if(lingua_traduzida == "ingles")
    expect(page).to have_content('Map')
    expect(page).to have_content('About')
    expect(page).to have_content('Contact')
  else
    expect(page).to have_content('Mapa')
    expect(page).to have_content('Sobre')
    expect(page).to have_content('Contato')
  end
end