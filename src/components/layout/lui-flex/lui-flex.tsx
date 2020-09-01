import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lui-flex',
  styleUrl: 'lui-flex.css',
  shadow: true,
})
export class LuiFlex {
  @Prop() direction: string = 'row';
  @Prop() justifyContent: string = 'flex-start';
  @Prop() alignItems: string = 'flex-start';
  @Prop() wrap: string = 'nowrap';
  @Prop() alignContent: string = 'stretch';

  private flexStyle(): any {
    return {
      flexDirection: this.direction,
      justifyContent: this.justifyContent,
      alignItems: this.alignItems,
      flexWrap: this.wrap,
      alignContent: this.alignContent,
    };
  }

  render() {
    return (
      <Host style={this.flexStyle()}>
        <slot></slot>
      </Host>
    );
  }
}
