# Project Name

- Playwright Test Automation

# Locating Elements in Playwright

- Property
- CSS
- Xpath

- Locate Single Web Elements

  - Link/Button

    `await page.click('locator')`

    `await page.locator('locator').click()`

  - Input-Box

    `await page.locator('locator').fill('value')`

    `await page.fill('locator','value')`

    `await page.locator('locator').type('value')`

    `await page.type('locator','value')`

- Locate Multiple Web Elements

  `const elements = await page.$$(locator)`

# Built-in Locator Methods

- To Locate an Element, usually image, by its text Alternative

  `page.getByAltText()`

- To Locate an input by Placeholder

  `page.getByPlaceholder()`

- To Locate by Explicit and implicit Accessibility Attributes

  `page.getByRole()`

- To Locate by text Content

  `page.getByText()`

- To Locate a form Control by Associated Label's text

  `page.getByLabel()`

- To Locate an Element by it's title Attribute

  `page.getByTitle()`

- To Locate an Element based on it's data-testid Attribute (other Attributes can be Configured)

  `page.getByTestId()`

# Assertions

- Page has URL

  `expect(page).toHaveURL()`

- Page has Title

  `expect(page).toHaveTitle()`

- Element is Visible

  `expect(locator).toBeVisible()`

- Control is Enabled

  `expect(locator).toBeEnabled()`

- Radio/Checkbox is checked

  `expect(locator).toBeChecked()`

- Element has Attribute

  `expect(locator).toHaveAttribute()`

- Element Matches Text

  `expect(locator).toHaveText()`

- Element Contains Text

  `expect(locator).toContainText()`

- Input has a Value

  `expect(locator).toHaveValue(value)`

- List of Elements has given Length

  `expect(locator).toHaveCount()`

# Interacting with Elements

- Handle Input Box

- Handle Radio Button

- Handle Check Boxes

  - Handle Single Check Box
  - Handle Multiple Check Boxes

## Handle Dropdown

```
  Multiple Ways to select option from the Dropdown
  ------------------------------------------------------------------
  - label/visible text
  await page.locator("#country").selectOption({ label: 'Japan' })
  ------------------------------------------------------------------
  - Visible Text
  await page.locator("#country").selectOption('Japan');
  ------------------------------------------------------------------
  - Value/Keyword
  await page.locator("#country").selectOption({ value: 'uk' })
  ------------------------------------------------------------------
  - Index
  await page.locator("#country").selectOption({ index: 1 })
  ------------------------------------------------------------------
  - byText
  await page.selectOption("#country", 'Japan')
```

```
  - Assertions in Dropdown
  ----------------------------------------------------------
  1) Check number of Options in Dropdown => Approach - 1
  const options = await page.locator("#country option")
  await expect(options).toHaveCount(10);
  ----------------------------------------------------------
  2) Check number of Options in Dropdown => Approach - 2
  const options = await page.$$("#country option")
  console.log("Number of Options:", options.length)
  ----------------------------------------------------------
  await expect(options.length).toBe(10)
```

### Handle Multi Select Dropdown

```
- Select Multiple Option from Multi Select Dropdown
------------------------------------------------------------------
await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);
```

```
- Assertions
------------------------------------------------------------------
1) Check Number of Options in Dropdown
------------------------------------------------------------------
  const options = await page.locator("#colors option")
  await expect(options).toHaveCount(5);
------------------------------------------------------------------
2) Check Number of Options in Dropdown using JS Array
------------------------------------------------------------------
  const options2 = await page.$$("#colors option")
  console.log("Number of Options:" + options2.length);
  await expect(options2.length).toBe(5);
  await page.waitForTimeout(5000);
```

### Handle Bootstrap Dropdown

```
Approach - 1
------------------------------------------------------------------
const options = await page.locator('ul>li label input');
await expect(options).toHaveCount(11);
------------------------------------------------------------------

Approach - 2
------------------------------------------------------------------
const options = await page.$$('ul>li label input');
await expect(options.length).toBe(11);
------------------------------------------------------------------

Approach - 3
------------------------------------------------------------------
//3)Select Options from Dropdown

    const options = await page.$$('ul>li label')
    for (let option of options) {
        const value = await option.textContent();
        //console.log("Value is:", value);
        if (value.includes('Angular') || value.includes('Java')) {
            await option.click();
        }
    }
```

### Handle Auto Suggest Dropdown

```
  await page.goto("https://www.redbus.in/");
  await page.locator("#src").fill("Delhi");
  await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

  const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

  for(let fromCityOption of fromCityOptions) {
    const city = await fromCityOption.textContent();
    //console.log(city);
    if (city.includes('ISBT Kashmiri Gate, Delhi')) {
        await fromCityOption.click();
          break;
        }
    }
```

## Handle Dialogs Or Alerts

### Alert() with OK

```
//Enabling Alert Handling
//Dialog Window Handler
  page.on('dialog', async dialog => {
  expect(dialog.type()).toContain('alert');
  expect(dialog.message()).toContain('I am an alert box!')
  await dialog.accept();
  })
  await page.click('button[onclick="myFunctionAlert()"]');
```

### Confirmation Dialog-Alert with Ok and Cancel

```
page.on('dialog', async dialog => {
  expect(dialog.type()).toContain('confirm');
  expect(dialog.message()).toContain('Press a button!')
  await dialog.accept();// close dialog using ok button
  //await dialog.dismiss();// close dialog using cancel button
})
  await page.click('//button[normalize-space()="Confirm Box"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
```

### Prompt Alert()

```
page.on('dialog', async dialog => {
  expect(dialog.type()).toContain('prompt');
  expect(dialog.message()).toContain('Please enter your name:');
  expect(dialog.defaultValue()).toContain("Harry Potter");
  await dialog.accept("Azim Afnaan");// close dialog using ok button
  //await dialog.dismiss();// close dialog using cancel button
})
  await page.click('//button[normalize-space()="Prompt"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Azim Afnaan! How are you today?')
```

## iFrames

```
//Total Frames
  const allframes = await page.frames();
  console.log("Number of Frames: ", allframes.length);
```

```
//Approach-1: Using name or url
  const var = await page.frame('name'); if name is present
  const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
  await frame1.locator("input[name='mytext1']").fill("Hello world!");
```

```
//Approach-2
  const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
  inputBox.fill("Hello world!");
```

## Handle Table

```
  const table = await page.locator("#productTable");
  // Total Number of columns
  const columns = await table.locator('thead tr th');
  console.log('Number of Columns:', await columns.count());
  expect(await columns.count()).toBe(4)

  // Total Number of Rows
  const rows = await table.locator('tbody tr');
  console.log('Number of Rows:', await rows.count());
  expect(await rows.count()).toBe(5)
```

```
//Select Check Box for Product 4
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedRow.locator('input').click();
    await page.waitForTimeout(5000);
```

```
// if created the re-usable function
//call the function
await selectProduct(rows, page, 'Product 5');
await selectProduct(rows, page, 'Product 4');
await selectProduct(rows, page, 'Product 2');

await page.waitForTimeout(5000);
```

```
// This Re-Usable Function is Create outside the 'test'
async function selectProduct (rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    matchedRow.locator('input').click();
}
```
