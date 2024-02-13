import { test, expect } from '@playwright/test'

test("Check Radio Button", async ({ page }) => {
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");
    //Radio Button
    await page.locator("//input[@id='male']").check();
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);// pausing code
})