import { newSpecPage } from '@stencil/core/testing';
import { LuiButton } from '../lui-button';

describe('lui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiButton],
      html: `<lui-button></lui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-button>
    `);
  });
});
