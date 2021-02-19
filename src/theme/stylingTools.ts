import {Platform} from 'react-native';
import {stylesConfig} from './stylesConfig';

type TSizesKeys = keyof typeof stylesConfig.sizes;

const toolsSizes: Record<TSizesKeys, string> = Object.entries(
  stylesConfig.sizes,
).reduce<Record<TSizesKeys, string>>(
  (acc, cv) => ({
    ...acc,
    [cv[0]]: cv[1] + 'px',
  }),
  {} as any,
);

const shadow =
  Platform.OS === 'android'
    ? 'elevation: 5;'
    : `
shadow-opacity: 0.06;
shadow-radius: 10px;
shadow-color: black;
shadow-offset: 0px 4px;
`;

export const stylingTools = {
  fullWindow: `height: ${stylesConfig.sizes.windowHeight}px; width: ${stylesConfig.sizes.windowWidth}px;`,
  centerContent: 'align-items: center; justify-content: center;',
  circle: (diameter: number) =>
    `height: ${diameter}px; width: ${diameter}px; borderRadius: ${diameter}px`,
  sizes: stylesConfig.sizes,
  spacing: (x: number) => x * stylesConfig.defaultSpacing,
  shadow,
  pxSizes: toolsSizes,
  pxSpacing: (x: number) => x * stylesConfig.defaultSpacing + 'px',
};
