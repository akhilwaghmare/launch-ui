import { newSpecPage } from '@stencil/core/testing';
import { LuiFlex } from '../lui-flex';

describe('lui-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiFlex],
      html: `<lui-flex></lui-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-flex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-flex>
    `);
  });
});
