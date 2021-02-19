import {appColors} from './appColors';

export const defaultThemeFontColors = {
  primary: appColors.black,
  secondary: appColors.white,
} as const;

type TGetFont = (
  size?: number,
  color?: keyof typeof defaultThemeFontColors,
  relative?: boolean,
) => string;

const getDefaultThemeSemiBoldFont: TGetFont = (size, color) => {
  return `font-weight: 600;font-size: ${size || 16}px; color: ${
    color ? defaultThemeFontColors[color] : defaultThemeFontColors.primary
  }`;
};

const getDefaultThemeBoldFont: TGetFont = (size, color) => {
  return `font-weight: 800;font-size: ${size || 16}px; color: ${
    color ? defaultThemeFontColors[color] : defaultThemeFontColors.primary
  }`;
};

const getDefaultThemeRegularFont: TGetFont = (size, color) => {
  return `font-weight: 400;font-size: ${size || 16}px; color: ${
    color ? defaultThemeFontColors[color] : defaultThemeFontColors.primary
  }`;
};

export const defaultFonts = {
  semibold: getDefaultThemeSemiBoldFont,
  bold: getDefaultThemeBoldFont,
  regular: getDefaultThemeRegularFont,
};
