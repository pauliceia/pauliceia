require 'capybara/cucumber'
require 'rspec'

Capybara.default_driver = :selenium_chrome # You can change this based on your preferred driver
Capybara.default_max_wait_time = 10

Before do
  Capybara.reset_sessions!
end
