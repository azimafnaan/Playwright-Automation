const { test, expect } = require('@playwright/test');

test('Locate Multiple Web Elements', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");

    const links = await page.$$('a')
    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }

    // Locate All Product Displayed on Home Page
    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }
})