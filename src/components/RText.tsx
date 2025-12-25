import { useTheme } from "@react-navigation/native";
import { StyleProp, Text, TextStyle } from "react-native";

type RTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

function RText(props: RTextProps) {
  const { children, style } = props;
  const theme = useTheme();

  return <Text style={[style, { color: theme.colors.text }]}>{children}</Text>; 
}

export default RText;