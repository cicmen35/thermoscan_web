import { expect, test } from '@playwright/test';

test('renders without horizontal overflow and navigates to contact', async ({ page }) => {
  await page.goto('/');
  const sizes = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(sizes.content).toBeLessThanOrEqual(sizes.viewport);

  await page.getByRole('link', { name: 'Kontaktujte nás' }).click();
  await expect(page.locator('#kontakt')).toBeInViewport();
});

test('submits the lead form through Web3Forms', async ({ page }) => {
  await page.route('https://api.web3forms.com/submit', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    });
  });
  await page.goto('/#kontakt');
  await page.getByLabel('Meno *').fill('Ján');
  await page.getByLabel('Priezvisko *').fill('Novák');
  await page.getByLabel('E-mail *').fill('jan@example.sk');
  await page.getByLabel('Typ objektu *').selectOption('Rodinný dom');
  await page.getByLabel('Lokalita *').fill('Nitra');
  await page.getByRole('button', { name: 'Odoslať správu' }).click();

  await expect(page.getByText('Ďakujeme. Váš dopyt bol úspešne odoslaný.')).toBeVisible();
});
