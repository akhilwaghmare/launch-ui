import { newSpecPage } from '@stencil/core/testing';
import { LuiAlert } from '../lui-alert';

describe('lui-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiAlert],
      html: `<lui-alert></lui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-alert>
    `);
  });
});
