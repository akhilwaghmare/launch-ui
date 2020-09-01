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

  private alertStyle(): any {
    var selectedStyle = getStyle(this.type);

    return {
      backgroundColor: `var(${selectedStyle.primaryColor})`,
      color: `var(${selectedStyle.secondaryColor})`,
      borderColor: `var(${selectedStyle.primaryColor})`,
    };
  }

  render() {
    return (
      <div style={this.alertStyle()}>
        <slot></slot>
      </div>
    );
  }
}
