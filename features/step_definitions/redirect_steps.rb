require 'minitest/autorun'

Given('Estou na página "Home"') do
  visit '/portal/home'
end

When('Eu clico no botao {string}') do |botao|
  click_link(botao)
end

Then('Eu sou redirecionado para a página {string}') do |pagina|
  if(pagina == "tutorial")
    expect(current_path).to eq('/portal/home')
    new_window = window_opened_by { click_link('Tutorial') }
    within_window(new_window) do
      expect(current_url).to eq('https://drive.google.com/drive/folders/1M7iU2iz46i2gIgfctkUCZdBARWJykcoT' || 'https://drive.google.com/drive/folders/1M7iU2iz46i2gIgfctkUCZdBARWJykcoT?usp=sharing')
    end
  else
    expect(current_path).to eq('/portal/' + pagina)
  end
end