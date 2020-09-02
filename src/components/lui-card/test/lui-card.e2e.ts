import { newE2EPage } from '@stencil/core/testing';

describe('lui-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-card></lui-card>');

    const element = await page.find('lui-card');
    expect(element).toHaveClass('hydrated');
  });
});
