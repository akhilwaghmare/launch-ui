import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'lui-flex',
  styleUrl: 'lui-flex.scss',
  shadow: true,
})
export class LuiFlex {
  @Element() el: HTMLElement;

  @Prop() direction: string = 'row';
  @Prop() justifyContent: string = 'flex-start';
  @Prop() alignItems: string = 'flex-start';
  @Prop() wrap: string = 'nowrap';
  @Prop() alignContent: string = 'stretch';

  @Prop() gutter: number = 0;
  @Prop() hgutter: number = 0;
  @Prop() vgutter: number = 0;

  private flexStyle(): any {
    if (this.gutter == 0) {
      this.el.style.setProperty('--h-gutter', `${this.hgutter}px`);
      this.el.style.setProperty('--v-gutter', `${this.vgutter}px`);
    } else {
      this.el.style.setProperty('--h-gutter', `${this.gutter}px`);
      this.el.style.setProperty('--v-gutter', `${this.gutter}px`);
    }

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
        <slot />
      </Host>
    );
  }
}
