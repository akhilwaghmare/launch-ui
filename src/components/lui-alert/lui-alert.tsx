import { Component, Prop, h } from '@stencil/core';
import { getStyle } from '../../utils/utils';

@Component({
  tag: 'lui-alert',
  styleUrl: 'lui-alert.css',
  shadow: true,
})
export class LuiAlert {
  // Properties
  @Prop() type: string = 'default';
  @Prop() accent: boolean;

  private alertStyle(): any {
    var selectedStyle = getStyle(this.type);

    if (this.accent) {
      return {
        backgroundColor: `var(--lui-color-transparent)`,
        color: `var(--lui-color-dark)`,
        borderColor: `var(--lui-color-gray)`,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderTopColor: `var(${selectedStyle.primaryColor})`,
        borderTopWidth: '3px',
        borderTopStyle: 'solid',
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
      <div style={this.alertStyle()}>
        <slot />
      </div>
    );
  }
}
