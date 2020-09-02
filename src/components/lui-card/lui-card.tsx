import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lui-card',
  styleUrl: 'lui-card.css',
  shadow: true,
})
export class LuiCard {
  render() {
    return (
      <Host>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </Host>
    );
  }
}
