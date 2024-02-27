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

    //Assertion
    // 1) Check number of Options in Dropdown => Approach - 1
    //const options = await page.locator("#country option")
    //await expect(options).toHaveCount(10);
    // 2) Check number of Options in Dropdown => Approach - 2
    const options = await page.$$("#country option")
    //console.log("Number of Options:", options.length)
    await expect(options.length).toBe(10)
    await page.waitForTimeout(5000);
})
