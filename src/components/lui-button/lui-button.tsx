import { Component, Prop, h } from '@stencil/core';
import { getStyle } from '../../utils/utils';

@Component({
  tag: 'lui-button',
  styleUrl: 'lui-button.css',
  shadow: true,
})
export class LuiButton {
  // Properties
  @Prop() type: string = 'default';
  @Prop() ghost: boolean;

  private buttonStyle(): any {
    var selectedStyle = getStyle(this.type);

    if (this.ghost) {
      return {
        backgroundColor: `var(--lui-color-transparent)`,
        color: `var(${selectedStyle.primaryColor})`,
        borderColor: `var(${selectedStyle.primaryColor})`,
      };
    }

    return {
      backgroundColor: `var(${selectedStyle.primaryColor})`,
      color: `var(${selectedStyle.secondaryColor})`,
      borderColor: `var(${selectedStyle.primaryColor})`,
    };
  }

  render() {
    return (
      <button style={this.buttonStyle()}>
        <slot />
      </button>
    );
  }
}
