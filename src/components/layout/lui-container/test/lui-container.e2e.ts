import { newE2EPage } from '@stencil/core/testing';

describe('lui-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-container></lui-container>');

    const element = await page.find('lui-container');
    expect(element).toHaveClass('hydrated');
  });
});
