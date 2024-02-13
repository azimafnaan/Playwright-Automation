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

- Locate Multiple Web Elements

  - const elements = await page.$$(locator)

# Built-in Locator Methods

- To Locate an Element, usually image, by its text Alternative

  - page.getByAltText()

- To Locate an input by Placeholder

  - page.getByPlaceholder()

- To Locate by Explicit and implicit Accessibility Attributes

  - page.getByRole()

- To Locate by text Content

  - page.getByText()

- To Locate a form Control by Associated Label's text

  - page.getByLabel()

- To Locate an Element by it's title Attribute

  - page.getByTitle()

- To Locate an Element based on it's data-testid Attribute (other Attributes can be Configured)

  - page.getByTestId()
