import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { RTextProps } from "./types";

export function RText(props: RTextProps) {
  const { children, style } = props;
  const theme = useTheme();

  return <Text style={[style, { color: theme.colors.text }]}>{children}</Text>; 
}
