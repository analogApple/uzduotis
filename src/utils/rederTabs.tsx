import React from 'react';
import {Text} from 'react-native';

export const renderTabs = (depth: number) => {
  return [...new Array(depth)].map(() => <Text>{'   '}</Text>);
};
