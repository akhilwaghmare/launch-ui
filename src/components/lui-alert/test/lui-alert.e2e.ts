import { newE2EPage } from '@stencil/core/testing';

describe('lui-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-alert></lui-alert>');

    const element = await page.find('lui-alert');
    expect(element).toHaveClass('hydrated');
  });
});
