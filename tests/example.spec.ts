import { test, expect } from '@playwright/test'

test('colored-form', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/colored-form', { timeout: 120000 })

  await page.locator("input[name='firstName']").fill('John')
  await page.locator("input[name='lastName']").fill('Doe')

  await expect(page).toHaveScreenshot({ fullPage: true, threshold: 0.1 })
})
