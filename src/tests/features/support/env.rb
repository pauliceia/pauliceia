require 'cucumber'
require 'capybara'
require 'selenium-webdriver'
require 'capybara/cucumber'
require 'report_builder'
require 'capybara/rspec'
require 'site_prism'
require 'rspec'
require 'rspec/expectations'

Capybara.register_driver :selenium_chrome do |app|

    current_directory = Dir.pwd
    download_directory = File.join(current_directory, 'download')
    download_directory = download_directory.gsub("/", "\\")

    options = Selenium::WebDriver::Chrome::Options.new
    options.add_preference(:download, prompt_for_download: false)
    options.add_preference(:download, default_directory: download_directory)

    Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
  end

Capybara.configure do |config|
    config.default_driver = :selenium_chrome #roda no navegador
    config.default_max_wait_time = 5

    Capybara.page.driver.browser.manage.window.maximize

    #config.default_driver = :selenium_chrome_headless #roda com o nageador em background
    #config.app_host = 'https://pauliceia.unifesp.br/'
end
