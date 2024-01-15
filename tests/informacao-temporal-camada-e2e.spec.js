import { test, expect } from '@playwright/test';
import layerListResponseMock from './ResponseMocks/layerListResponseMock.json'
import temporalColumnsResponseMock from './ResponseMocks/temporalColumnsResponseMock.json'
const path = require('path');

test('Aparecer data de inicio e termino nas informacoes da camada', async ({ page }) => {

  await page.route('https://pauliceia.unifesp.br/api/vgi/api/layer/', async route => {
    const json = layerListResponseMock;
    await route.fulfill({ json });
  });

  await page.route('https://pauliceia.unifesp.br/api/vgi/api/temporal_columns/?f_table_name=a_enchente_de_1929_em_sp', async route => {
    const json = temporalColumnsResponseMock;
    await route.fulfill({ json });
  });

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

  //Adicionando a primeira camada qie existe no mapa
  await page.getByText('keyboard_arrow_right').click();
  await page.locator('.box-options > .md-button').click();
  await page.waitForTimeout(7000);
  await page.getByText('Ativar').first().click();

  //Fechando o form
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.waitForLoadState('networkidle');

  //Clicando no botão para mostrar as informacoes da camada
  await page.getByRole('button', { name: 'settings' }).nth(1).click();
  await page.getByText('assignment').click();
  await page.waitForLoadState('networkidle');

  //Verificando se os campos de data de inicio e termico aparecem
  await expect(page.getByText('DATA DE INÍCIO DA CAMADA: 01/02/1929')).toBeVisible();
  await expect(page.getByText('DATA DE TÉRMINO DA CAMADA: 27/02/1929')).toBeVisible();
});