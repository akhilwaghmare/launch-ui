import { newSpecPage } from '@stencil/core/testing';
import { LuiBadge } from '../lui-badge';

describe('lui-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiBadge],
      html: `<lui-badge></lui-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-badge>
    `);
  });
});
