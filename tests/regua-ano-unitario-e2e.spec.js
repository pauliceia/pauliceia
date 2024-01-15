import { test, expect } from '@playwright/test';
const path = require('path');

test('Regua de ano unitario podendo ver de um ano especifico', async ({ page }) => {

  //iniciar na página principal
  await page.goto('/', { waitUntil: 'networkidle' });

  //Ter certeza que o site está em portugues
  await page.locator('#Layer_1').first().click();

  //Indo para o menu Mapa
  await page.getByRole('link', { name: 'Mapa' }).click();
  await page.waitForLoadState('networkidle');

  //Fechando anuncio versao beta
  await page.getByRole('button', { name: 'close' }).nth(1).click();
  await page.waitForLoadState('networkidle');

  //Aparecer os dois slider de escolher o ano
  await expect(page.getByRole('slider').first()).toBeVisible();
  await expect(page.getByRole('slider').nth(1)).toBeVisible();

  //Clicar no botao para aparecer somente um slider
  await page.getByText('design_services').click();

  //Aparecer somente um slider de escolher o ano
  await expect(page.getByRole('slider').first()).toBeVisible();
  await expect(page.getByRole('slider').nth(1)).not.toBeVisible();

  //Clicar no botao para aparecer os dois slider
  await page.getByText('design_services').click();

  //Aparecer os dois slider de escolher o ano
  await expect(page.getByRole('slider').first()).toBeVisible();
  await expect(page.getByRole('slider').nth(1)).toBeVisible();
});