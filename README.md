# Project Name

- Playwright Test Automation

# Locating Elements in Playwright

- Property
- CSS
- Xpath

- Locate Single Web Elements

  - Link/Button

    - await page.click('locator')
    - await page.locator('locator').click()

  - Input-Box

    - await page.locator('locator').fill('value')
    - await page.fill('locator','value')
    - await page.locator('locator').type('value')
    - await page.type('locator','value')
