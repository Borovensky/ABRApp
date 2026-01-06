import { useColorScheme } from 'react-native';
import { getNavigationTheme } from '../navigation/navigation-theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const theme = getNavigationTheme(colorScheme);

  return {
    theme,
    colorScheme,
  };
};