import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'lui-input',
  styleUrl: 'lui-input.css',
  shadow: true,
})
export class LuiInput {
  // Properties
  @Prop() placeholder: string = '';

  // State
  @State() focus: boolean;

  private setFocus(newFocus: boolean) {
    this.focus = newFocus;
  }

  render() {
    return (
      <Host class={{ focus: this.focus }}>
        <input type="text" placeholder={this.placeholder} onFocus={() => this.setFocus(true)} onBlur={() => this.setFocus(false)} />
      </Host>
    );
  }
}
