const { test, expect } = require("@playwright/test");

test("Handling Table", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("#productTable");
    // Total Number of columns
    const columns = await table.locator('thead tr th');
    console.log('Number of Columns:', await columns.count());
    expect(await columns.count()).toBe(4)

    // Total Number of 
    const rows = await table.locator('tbody tr');
    console.log('Number of Rows:', await rows.count());
    expect(await rows.count()).toBe(5)

    //Select Check Box for Product 4

    /*const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedRow.locator('input').click();
    */
    // Select Multiple Product be Re-Usable Function
    await selectProduct(rows, page, 'Product 5')
    await page.waitForTimeout(5000);

});

async function selectProduct (rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    matchedRow.locator('input').click();
}
