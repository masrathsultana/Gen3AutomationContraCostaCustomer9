import { test, expect } from '@playwright/test';

test('Login to ContraCosta Portal', async ({ page }) => {

    await page.goto("https://contracosta.test.leateamapps.com/#/signin")
    await page.locator("#userid").fill("orionuser")
    await page.locator("#spassword").fill("Abc@12345")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(5000);




})