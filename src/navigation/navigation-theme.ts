import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

import colors from '../constants/colors';

import type { ColorSchemeName } from 'react-native';


export const navigationLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.abrBlue,
    background: '#FFFFFF',
    card: '#FFFFFF',
    border: colors.lightSkyBlue,
  },
};

export const navigationDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.skyBlue,
    background: colors.darkBlue,
    card: colors.blue,
    border: colors.lightBlue,
  },
};

export const getNavigationTheme = (colorScheme: ColorSchemeName): Theme =>
  colorScheme === 'dark' ? navigationDarkTheme : navigationLightTheme;


