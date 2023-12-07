Given("I am on the JavaScript site home page") do
  visit 'http://localhost:8080/portal' # Adjust the path as needed
end

When("I press the {string} button to access the {string} section") do |button_text, section_name|
  # Find the button based on its text and click it
  click_link button_text
end

Then("I should see the message:") do |expected_message|
   # Find the h5 element with the specified XPath
  card_title_element = find(:xpath, '/html/body/div[1]/section/div/section/div[1]/header/div[1]/div/div/h5')

  # Find the closest common ancestor
  common_ancestor = card_title_element.find(:xpath, '/html/body/div[1]/section/div/section/div[1]/header/div[1]/div')

  # Find the related card-text div based on the common ancestor
  related_card_text_div = common_ancestor.find(:xpath, './/div[@class="card-text"]')

  # Compare the text content of the related card-text div with the expected message
  expect(related_card_text_div.text.strip).to eq(expected_message)
end
