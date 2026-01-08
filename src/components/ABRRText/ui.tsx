import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';

import { ABRTextProps } from './types';

export function ABRText(props: ABRTextProps) {
  const { children, style } = props;
  const theme = useTheme();

  return <Text style={[style, { color: theme.colors.text }]}>{children}</Text>; 
}
