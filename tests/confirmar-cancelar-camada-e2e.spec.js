import { test, expect } from '@playwright/test';
import userLayersResponseMock from './ResponseMocks/userLayersResponseMock.json'
import userLayersExcludedResponseMock from './ResponseMocks/userLayersExcludedResponseMock.json'
import specificLayerResponseMock from './ResponseMocks/specificLayerResponseMock.json'
const path = require('path');

test('Popup de confirmacao da exclusao da camada pelo menu Painel', async ({ page }) => {
  // Mock chamadas API
  let hasDeleted = false;
  await page.route('https://pauliceia.unifesp.br/api/vgi/api/user_layer/?user_id=*', async route => {
    const json = hasDeleted ? userLayersExcludedResponseMock : userLayersResponseMock;
    await route.fulfill({ json });
  });

  await page.route('https://pauliceia.unifesp.br/api/vgi/api/layer/?layer_id=1', async route => {
    const json = specificLayerResponseMock;
    await route.fulfill({ json });
  });
  

  //iniciar na página principal
  await page.goto('/', { waitUntil: 'networkidle' });

  //Ter certeza que o site está em portugues
  await page.locator('#Layer_1').first().click();

  //Fazer Login - curto
  await page.getByRole('link', { name: 'Entrar' }).click();
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('amanda.perellon@usp.br');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('123456');
  await page.getByPlaceholder('Senha').press('Enter');

  //Ir para o painel
  await page.locator('#navbarCollapse').getByRole('button').click();
  await page.getByRole('link', { name: 'home Painel' }).click();
  await page.waitForLoadState('networkidle');
  
  //Excluir a camada
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'clear' }).first().click();

  //Necessário que apareca o texto de confirmacao de exclusao
  await expect(page.locator('section').nth(2)).toBeVisible();
  await expect(page.locator('b')).toContainText('Tem certeza que deseja deletar essa camada?');
  await expect(page.getByText('Tem certeza que deseja deletar essa camada? Sim! Não')).toBeVisible();
  
  //Quando apertar nao, a camada nao sera apagada
  await page.getByRole('button', { name: 'Não' }).click();
  await expect(page.getByText('camada-teste-exclusao')).toHaveCount(3);
  
  //Excluir a camada
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'clear' }).first().click();
  hasDeleted = true;

  //Necessário que apareca o texto de confirmacao de exclusao
  await expect(page.locator('section').nth(2)).toBeVisible();
  await expect(page.locator('b')).toContainText('Tem certeza que deseja deletar essa camada?');
  await expect(page.getByText('Tem certeza que deseja deletar essa camada? Sim! Não')).toBeVisible();

  //Se apertar sim, a camada não deve mais aparecer no grid
  await page.getByRole('button', { name: 'Sim!' }).click();
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByText('camada-teste-exclusao')).toHaveCount(2);

});

test('Popup de confirmacao da exclusao da camada na edicao da camada', async ({ page }) => {
  // Mock chamadas API
  let hasDeleted = false;
  await page.route('https://pauliceia.unifesp.br/api/vgi/api/user_layer/?user_id=*', async route => {
    const json = hasDeleted ? userLayersExcludedResponseMock : userLayersResponseMock;
    await route.fulfill({ json });
  });

  await page.route('https://pauliceia.unifesp.br/api/vgi/api/layer/?layer_id=1', async route => {
    const json = specificLayerResponseMock;
    await route.fulfill({ json });
  });

  //iniciar na página principal
  await page.goto('/', { waitUntil: 'networkidle' });

  //Ter certeza que o site está em portugues
  await page.locator('#Layer_1').first().click();

  //Fazer Login - curto
  await page.getByRole('link', { name: 'Entrar' }).click();
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('amanda.perellon@usp.br');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('123456');
  await page.getByPlaceholder('Senha').press('Enter');

  //Ir para a pagina Painel
  await page.locator('#navbarCollapse').getByRole('button').click();
  await page.getByRole('link', { name: 'home Painel' }).click();
  await page.waitForLoadState('networkidle');

  //Clicando no botao de editar da camada
  await page.getByRole('button', { name: 'create' }).first().click();
  await page.waitForLoadState('networkidle');

  //Excluir a camada
  await page.keyboard.press("PageDown");
  await page.getByRole('link', { name: 'Deletar' }).click();

  //Espera-se que apareca a pop de confirmacao
  await expect(page.locator('#confirmationPopup')).toContainText('Tem certeza que deseja deletar essa camada? Sim! Não');
  await expect(page.getByText('Tem certeza que deseja deletar essa camada? Sim! Não')).toBeVisible();

  //Clicado em nao
  await page.getByRole('button', { name: 'Não' }).click();

  //Ir para a pagina Painel
  await page.locator('#navbarCollapse').getByRole('button').click();
  await page.getByRole('link', { name: 'home Painel' }).click();
  await page.waitForLoadState('networkidle');

  //Verificar se a camada continua la
  await expect(page.getByText('camada-teste-exclusao')).toHaveCount(3);

  //Editar a camada
  await page.getByRole('button', { name: 'create' }).first().click();
  await page.waitForLoadState('networkidle');
  
  //Deletar a camada
  await page.keyboard.press("PageDown");
  await page.getByRole('link', { name: 'Deletar' }).click();

  //Espera-se que apareca a pop de confirmacao
  await expect(page.locator('#confirmationPopup')).toContainText('Tem certeza que deseja deletar essa camada? Sim! Não');
  await expect(page.getByText('Tem certeza que deseja deletar essa camada? Sim! Não')).toBeVisible();

  //Apertar Sim para apagar a camada
  await page.getByRole('button', { name: 'Sim!' }).click();
  hasDeleted = true;

  //Ir para a pagina Painel
  await page.locator('#navbarCollapse').getByRole('button').click();
  await page.getByRole('link', { name: 'home Painel' }).click();
  await page.waitForLoadState('networkidle');
  await page.reload();
  await page.waitForLoadState('networkidle');


  //Espera-se que não tenha mais a camada na area das minhas camadas
  await expect(page.getByText('camada-teste-exclusao')).toHaveCount(2);

});