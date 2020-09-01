export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

enum Style {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Default = 'default',
}

export function getStyle(styleCode: string): { primaryColor: string; secondaryColor: string } {
  var selectedStyle = styleCode;
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
      primaryColor = '--lui-color-gray';
      secondaryColor = '--lui-color-dark';
      break;
  }

  return {
    primaryColor,
    secondaryColor,
  };
}
