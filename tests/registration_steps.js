// features/step_definitions/registration_steps.js
const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

let browser;
let page;

Given("I am on the home page", async function () {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:8081"); // Substitua pela URL do seu aplicativo
});

When("I click on the {string} button", async function (buttonText) {
  const buttonSelector = `.btn-register:contains("${buttonText}")`;
  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);
});

Then("I should be redirected to the registration page", async function () {
  // Agora você pode adicionar verificações específicas para a página de registro.
  // Por exemplo, verificar se a URL mudou para a página de registro.
  const currentURL = page.url();
  expect(currentURL).to.include("/register");

  await browser.close();
});
