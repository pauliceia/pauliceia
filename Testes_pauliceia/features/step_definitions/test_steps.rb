Then(/^I will wait for (\d+) seconds$/) do |waitTime|
  sleep (waitTime.to_i)
end

Given('Im at the Map page for the first time') do
  visit 'http://localhost:8080/portal/explore'
end

When('click the começar button on the banner') do
  find(:xpath, '/html/body/div/section/div/section/div/section[3]/button').click
end

When('i click the search button') do
  find(:xpath, '/html/body/div[1]/section/div/section/div/section[1]/form/div/div[2]/button').click
end

When('enter a the address {string} on the address bar') do |string|
  find(:xpath, '/html/body/div/section/div/section/div/section[1]/form/div/div[1]/div[1]/input').send_keys string
end

Then('I should see the option {string}') do |string|
  page.should have_content(string)
end

Then('I should see the {string} error') do |string|
  page.should have_content("Formato inválido")
end

Given("I'm on the home page") do
  visit'http://localhost:8080/portal/home'
end

When('I click the USA flag icon') do
  all(:xpath, '//*[@id="Layer_1"]')[1].click
end

Then('I should see the message {string} on the bottom left corner') do |string|
  page.should have_content(string)
end

When('I click the Brazil flag icon') do
  all(:xpath, '//*[@id="Layer_1"]')[0].click
end

When('I click the Camadas button') do
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/p').click
end

When('click the "adicionar e remover camadas" icon') do
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/section/div/div/div/button/div/div').click
end

When('i search for {string} card') do |string|
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/div/div/div/div[2]/div/input').send_keys string
end

Then('i should see {string} card') do |string|
  page.should have_content(string)
end

Then('I should see {string}') do |string|
  page.should have_content(string)
end

When('click the "Ativar" button on the "A enchente de 1850" card') do
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/div/div/div/div[2]/article[2]/div/div[2]/button').click
end

Then('i should close the window') do
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/div/div/div/div[1]/button').click
end

Then('I should see the information of the {string} camada') do |string|
  page.should have_content(string)
end

When('I click the Entrar button') do
  find(:xpath, '/html/body/div/section/div/header/nav/div/div[1]/a').click
end

When('I click the Tutorial button') do
  find(:xpath, '/html/body/div[1]/section/div/header/nav/div/ul/li[3]/a').click
end


When('I click the Mapa button') do
  find(:xpath, '/html/body/div[1]/section/div/header/nav/div/ul/li[2]/a').click
end


When('I click the Sobre button') do
  find(:xpath, '/html/body/div[1]/section/div/header/nav/div/ul/li[4]/a').click
end

When('I click the Contato button') do
  find(:xpath, '/html/body/div[1]/section/div/header/nav/div/ul/li[5]/a').click
end

When('I click the Home button') do

  find(:xpath, '/html/body/div/section/div/header/nav/div/ul/li[1]/a').click
end

Given("I'm at the Login page") do
  visit 'http://localhost:8080/portal/login'
end

Then('click the {string} button on the {string} card') do |string, string2|  
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/div/div/div/div[2]/article/div/div[2]/button').click
end

When('I enter my credentials') do
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[1]/input').send_keys "admin@admin.com"
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[2]/input').send_keys "admin"
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[3]/button').click
end

Then('I should be succesfully logged in') do
  page.should have_content("BEM-VINDO")
end

When('I enter wrong credentials') do
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[1]/input').send_keys "caio.camelo@usp.br"
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[2]/input').send_keys "12345f11111"
  find(:xpath, '/html/body/div/section/div/div/section/div[1]/div/form/div[3]/button').click
end

Then('I should see an error message') do
  page.should have_content("E-mail ou senha incorreta!")
end

Given('I am on the Home of the Dashboard') do
  visit 'http://localhost:8080/portal/dashboard/home'

end


When('I click the delete icon next to the name of any layer called in the My Layers list') do
  find(:xpath, '/html/body/div/section/div/div/main/div/div/div/div[2]/div[1]/div/div/div/div[2]/button[1]').click
end

Then('a pop-up window should appear, asking if the user really wants to delete the layer') do
  page.should have_content("excluir a camada")
end

Given('that Im on the edit page for any layer called') do 
  visit 'http://localhost:8080/portal/dashboard/home'  
  find(:xpath, '/html/body/div/section/div/div/main/div/div/div/div[2]/div[1]/div/div/div/div[2]/button[2]').click
end

When('I click on the red button labeled {string}') do |string|  
  find(:xpath, '/html/body/div/section/div/div/main/div/div/div/div[1]/div/div/div/div/a[2]').click
end

Given('that I am in the add and remove layers window') do
 
  visit 'http://localhost:8080/portal/explore'
  find(:xpath, '/html/body/div/section/div/section/div/section[3]/button').click
  sleep (1)
  find(:xpath, '/html/body/div/section/div/section/div/div[2]/p').click
  sleep (1)
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/section/div/div/div/button/div/div').click
end


Then('it should be possible to observe the {string} e {string}') do |string, string2|
  page.should have_content(string)
  page.should have_content(string2)
end

Then('I will should see the {string}') do |string|
  page.has_css?(string, visible: :all)
end

When('I click the Mudar régua button') do
  find(:xpath, '//*[@id="changeButton"]').click
end

Then('it should be possible to observe the {string}') do |string|
  page.should have_content(string)
end

Given('that I am in the side panel for layers on the map') do
  visit 'http://localhost:8080/portal/explore'
  find(:xpath, '/html/body/div/section/div/section/div/section[3]/button').click
  sleep (1)
  find(:xpath, '/html/body/div/section/div/section/div/div[2]/p').click
  sleep (1)
end

Then('click the engine button') do
  
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/section/ul/section/div/div/div/span[2]/span/button').click
end

When('i click in the information about layer') do
  
  find(:xpath, '/html/body/div[1]/section/div/section/div/div[2]/section/ul/section/div/div/div/div[2]/i[2]').click
end

Then('i shoul see {string} e {string}') do |string, string2|
  page.should have_content(string)
  page.should have_content(string2)
end