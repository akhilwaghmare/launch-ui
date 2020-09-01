import { Component, Prop, h } from '@stencil/core';

enum Style {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Default = 'default',
}

@Component({
  tag: 'lui-button',
  styleUrl: 'lui-button.css',
  shadow: true,
})
export class LuiButton {
  // Properties
  @Prop() presetStyle: string = 'default';
  @Prop() ghost: boolean;

  private getStyle(): any {
    var selectedStyle = this.presetStyle;
    if (!Object.values(Style).includes(selectedStyle as Style)) {
      selectedStyle = 'default';
    }
    var primaryColor = '';
    var secondaryColor = '';
    switch (selectedStyle) {
      case Style.Primary:
        primaryColor = '--lui-color-primary';
        secondaryColor = '--lui-color-white';
        break;
      case Style.Success:
        primaryColor = '--lui-color-success';
        secondaryColor = '--lui-color-white';
        break;
      case Style.Danger:
        primaryColor = '--lui-color-danger';
        secondaryColor = '--lui-color-white';
        break;
      case Style.Warning:
        primaryColor = '--lui-color-warning';
        secondaryColor = '--lui-color-white';
        break;
      default:
        primaryColor = '--lui-color-dark';
        secondaryColor = '--lui-color-light';
        break;
    }

    if (this.ghost) {
      return {
        backgroundColor: `var(--lui-color-transparent)`,
        color: `var(${primaryColor})`,
        borderColor: `var(${primaryColor})`,
      };
    }

    return {
      backgroundColor: `var(${primaryColor})`,
      color: `var(${secondaryColor})`,
      borderColor: `var(${primaryColor})`,
    };
  }

  render() {
    return (
      <button style={this.getStyle()}>
        <slot></slot>
      </button>
    );
  }
}
