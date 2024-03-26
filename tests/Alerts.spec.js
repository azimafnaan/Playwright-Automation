const { test, expect } = require('@playwright/test');

test('Alert with Ok', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Alert Handling
    //Dialog Window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.click('button[onclick="myFunctionAlert()"]');
    await page.waitForTimeout(5000);
})
