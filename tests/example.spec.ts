import { test, expect } from '@playwright/test'

test('check homepage and login screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const homeLink = page.locator('text=Home')
  await expect(homeLink).toHaveAttribute('href', '/')

  const loginLink = page.locator('text=Login')
  await expect(loginLink).toHaveAttribute('href', '/login')

  await loginLink.click()

  await expect(page).toHaveScreenshot({ fullPage: true })
})

test('login fill test', async ({ page }) => {
  await page.goto('http://localhost:3000/login')

  await page.locator("input[name='firstName']").fill('John')
  await page.locator("input[name='lastName']").fill('Thmith')

  await page.locator('text=get location').click()
  
})
