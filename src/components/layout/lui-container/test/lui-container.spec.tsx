import { newSpecPage } from '@stencil/core/testing';
import { LuiContainer } from '../lui-container';

describe('lui-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiContainer],
      html: `<lui-container></lui-container>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-container>
    `);
  });
});
