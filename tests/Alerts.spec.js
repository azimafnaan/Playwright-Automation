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

test('Confirmation Dialog-Alert with Ok and Cancel', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Alert Handling
    //Dialog Window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();// close dialog using ok button
        //await dialog.dismiss();// close dialog using cancel button
    })
    await page.click('//button[normalize-space()="Confirm Box"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
})

test.only('Prompt', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Alert Handling
    //Dialog Window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Azim Afnaan");// close dialog using ok button
        //await dialog.dismiss();// close dialog using cancel button
    })
    await page.click('//button[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Azim Afnaan! How are you today?')
    await page.waitForTimeout(5000);
})