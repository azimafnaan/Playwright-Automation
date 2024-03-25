const { test, expect } = require('@playwright/test');

test('Auto Suggest Dropdown', async ({ page }) => {
    await page.goto("https://www.redbus.in/");
    await page.locator("#src").fill("Delhi");
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    for (let fromCityOption of fromCityOptions) {
        const city = await fromCityOption.textContent();
        //console.log(city);
        if (city.includes('ISBT Kashmiri Gate, Delhi')) {
            await fromCityOption.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})