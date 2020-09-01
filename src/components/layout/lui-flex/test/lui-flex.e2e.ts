import { newE2EPage } from '@stencil/core/testing';

describe('lui-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-flex></lui-flex>');

    const element = await page.find('lui-flex');
    expect(element).toHaveClass('hydrated');
  });
});
