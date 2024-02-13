const { test, expect } = require('@playwright/test');

test("Assertions", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register");

    //Page has Url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    // Page has Title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    //Element is visible
    const logoElement = await page.locator(".header-logo")
    await expect(logoElement).toBeVisible();

    //Control is enabled
    const searchStoreBox = await page.locator("#small-searchterms")
    expect(searchStoreBox).toBeEnabled()

    //Radio Button is checked
    const maleRadioButton = await page.locator("#gender-male");
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    //Checkbox is checked
    const newsCheckbox = await page.locator("#Newsletter");
    await expect(newsCheckbox).toBeChecked();

    // Element has Attribute
    const registerButton = await page.locator("#register-button")
    await expect(registerButton).toHaveAttribute("type", "submit");

    // Element Matches Text
    await expect(await page.locator('.page-title')).toHaveText("Register")//full text

    // Element Contains Text
    await expect(await page.locator('.page-title')).toContainText("Regi")//partial

    //Input has a value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    // List of Elements has given Length
    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13);
})