import { newE2EPage } from '@stencil/core/testing';

describe('lui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-button></lui-button>');

    const element = await page.find('lui-button');
    expect(element).toHaveClass('hydrated');
  });
});
