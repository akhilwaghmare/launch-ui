import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lui-container',
  styleUrl: 'lui-container.scss',
  shadow: true,
})
export class LuiContainer {
  @Prop() fluid: boolean;
  @Prop() center: boolean;

  render() {
    return (
      <Host
        class={{
          center: this.center,
          fluid: this.fluid,
        }}
      >
        <slot />
      </Host>
    );
  }
}
