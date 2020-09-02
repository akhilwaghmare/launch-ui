import { newE2EPage } from '@stencil/core/testing';

describe('lui-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lui-input></lui-input>');

    const element = await page.find('lui-input');
    expect(element).toHaveClass('hydrated');
  });
});
