import { newSpecPage } from '@stencil/core/testing';
import { LuiInput } from '../lui-input';

describe('lui-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LuiInput],
      html: `<lui-input></lui-input>`,
    });
    expect(page.root).toEqualHtml(`
      <lui-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lui-input>
    `);
  });
});
