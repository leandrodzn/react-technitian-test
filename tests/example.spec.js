// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com/cat/says/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const fact = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await fact.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX_URL)).toBeTruthy()
})
