import { newSpecPage } from '@stencil/core/testing';
import { LuiCard } from '../lui-card';

describe('lui-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiCard],
      html: `<lui-card></lui-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-card>
    `);
  });
});
