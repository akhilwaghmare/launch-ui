import { Component, h, Prop } from '@stencil/core';
import { getStyle } from '../../utils/utils';

@Component({
  tag: 'lui-badge',
  styleUrl: 'lui-badge.css',
  shadow: true,
})
export class LuiBadge {
  // Properties
  @Prop() type: string = 'default';
  @Prop() pill: boolean;

  private badgeStyle(): any {
    var selectedStyle = getStyle(this.type);

    return {
      backgroundColor: `var(${selectedStyle.primaryColor})`,
      color: `var(${selectedStyle.secondaryColor})`,
      borderColor: `var(${selectedStyle.primaryColor})`,
      borderRadius: this.pill ? '9999px' : '',
    };
  }

  render() {
    return (
      <span style={this.badgeStyle()}>
        <slot />
      </span>
    );
  }
}
