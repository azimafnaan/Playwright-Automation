const { test, expect } = require('@playwright/test');

test("Handle Check Box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Multiple Ways to select option from the dropdown
    //label/visible text
    // await page.locator("#country").selectOption({ label: 'Japan' })
    //Visible Text
    // await page.locator("#country").selectOption('Japan');
    //Value/Keyword
    // await page.locator("#country").selectOption({ value: 'uk' })
    //Index
    //await page.locator("#country").selectOption({ index: 1 })
    //byText
    //await page.selectOption("#country", 'Japan')
    await page.waitForTimeout(5000);
})
