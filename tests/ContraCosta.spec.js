import { LoginPage } from '../Pages/LoginPage';
import { ServiceRequest } from '../Pages/ServiceRequest';
import { test, expect } from '@playwright/test';

test('Login to ContraCosta Portal', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.Login();
    const SR = new ServiceRequest(page);
    await SR.CreateSRExistingContact();
})