import { test, expect } from '@playwright/test';
const path = require('path');

test('Data de hoje como a maxima para a Data Final de uma camada', async ({ page }) => {

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

    //Criar uma nova camada
    await page.getByRole('link', { name: 'layers Nova Camada' }).click();
    await page.waitForLoadState('networkidle');

    //Colocando os dados da camada conforme o exemplo passado pela equipe do Pauliceia
    await page.getByLabel('Nome').click();
    await page.getByLabel('Nome').fill('camada_teste_999');
    await page.locator('#keywordsSelect i').click();
    await page.getByText('testes').click();
    await page.getByLabel('Arquivo de Entrada').click();
    await page.getByLabel('Arquivo de Entrada').setInputFiles(path.join(__dirname, 'teste_linha_1930-1940.zip'));
    await page.getByRole('button', { name: 'Enviar' }).click();
    await page.waitForLoadState('networkidle');

    //Preenchendo os dados temporais
    await page.getByLabel('Data inicial').fill('1940-01-01');
    await page.locator('#start_date_column_name i').click();
    await page.getByText('data', { exact: true }).click();
    await page.locator('#start_date_mask').getByText('× Loading...').click();
    await page.getByText('YYYY-MM-DD').click();

    //Espera que a data maxima permitida no campo seja a de hoje
    const currentDate = new Date().toLocaleDateString().split("/").reverse().join("-");
    expect(page.getByLabel('Data final')).toHaveAttribute("max", currentDate);

});