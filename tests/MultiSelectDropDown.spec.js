const { test, expect } = require('@playwright/test');

test("Handle Multi Select Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Select Multiple Option from Multi Select Dropdown
    await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);

    //Assertions
    // 1) Check Number of Options in Dropdown
    const options = await page.locator("#colors option")
    await expect(options).toHaveCount(5);
    // 2) Check Number of Options in Dropdown using JS Array
    const options2 = await page.$$("#colors option")
    console.log("Number of Options:" + options2.length);
    await expect(options2.length).toBe(5);
    await page.waitForTimeout(5000);
})