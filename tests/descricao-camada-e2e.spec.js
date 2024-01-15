import { test, expect } from '@playwright/test';
const path = require('path');
import layerListResponseMock from './ResponseMocks/layerListResponseMock.json'

test('Aparecer a descricao da camada ao tentar adicionar no mapa', async ({ page }) => {

  await page.route('https://pauliceia.unifesp.br/api/vgi/api/layer/', async route => {
    const json = layerListResponseMock;
    await route.fulfill({ json });
  });


  //iniciar na página principal
  await page.goto('/', { waitUntil: 'networkidle' });

  //Ter certeza que o site está em portugues
  await page.locator('#Layer_1').first().click();

  //Indo para o menu Mapa
  await page.getByRole('link', { name: 'Mapa' }).click();

  //Adicionando camada no mapa
  await page.getByText('keyboard_arrow_right').click();
  await page.locator('.box-options > .md-button').click();
  await page.waitForTimeout(7000);

  //Verificando se existe o botao descricao
  await expect(page.getByText('DESCRIÇÃO').first()).toBeVisible();

  //Clicando no botao
  await page.getByText('DESCRIÇÃO').first().click();

  //Vendo se ha texto no campo de descricao
  await expect(page.getByLabel('DESCRIÇÃO').first().getByRole('paragraph')).not.toBeEmpty();
  
});