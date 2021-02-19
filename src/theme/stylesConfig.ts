import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

const defaultSpacing = 8;

const stylesConfigSizes = {
  windowWidth: window.width,
  windowHeight: window.height,
} as const;

export const stylesConfig = {
  defaultSpacing,
  sizes: stylesConfigSizes,
};
