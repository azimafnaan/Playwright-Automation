const { test, expect } = require('@playwright/test');

test("Handle Check Box", async ({ page }) => {
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");
    await page.locator("//input[@id='friday' and @type='checkbox']").check();
    //await page.check("//input[@id='friday' and @type='checkbox']")
    expect(await page.locator("//input[@id='friday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='friday' and @type='checkbox']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='thursday' and @type='checkbox']").isChecked()).toBeFalsy();

    // Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']"
    ]

    for (const locators of checkboxLocators) {
        await page.locator(locators).check();
    }

    for (const locators of checkboxLocators) {    // unselect multiple checkboxes which are already checked
        if (await page.locator(locators).isChecked()) {
            await page.locator(locators).uncheck();
        }
    }

    await page.waitForTimeout(5000);
})