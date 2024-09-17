require 'capybara/cucumber'
require 'selenium-webdriver'
require 'webdrivers'
require 'capybara/rspec'
require_relative 'vgiws_mock'

Capybara.default_driver = :selenium_chrome
Capybara.javascript_driver = :selenium_chrome
Capybara.default_max_wait_time = 10

Capybara.app_host = 'http://localhost:8080'

Capybara.register_driver :selenium_chrome do |app|
  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
end

Thread.new do
  VgiwsMock.run! port: 8888
end