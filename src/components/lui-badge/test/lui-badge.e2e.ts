import { newE2EPage } from '@stencil/core/testing';

describe('lui-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-badge></lui-badge>');

    const element = await page.find('lui-badge');
    expect(element).toHaveClass('hydrated');
  });
});
