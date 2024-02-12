const { test, expect } = require('@playwright/test');

test('Locator', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    // click on the button - property
    await page.locator("id=login2").click();

    // provide username and password -css
    await page.fill('#loginusername', 'pavanol');
    await page.fill("input[id='loginpassword']", 'test@123');
    //click on login button
    await page.locator("//button[normalize-space()='Log in']").click()
    //Verify logout link 
    const welcomeMsg = await page.locator("//a[@id='nameofuser']");
    await expect(welcomeMsg).toHaveText("Welcome pavanol");
    await page.close();



})