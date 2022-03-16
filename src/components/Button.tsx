import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "./Theme";

interface ButtonProps {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "primary" ? colors.primary : colors.background2;

  const color = variant === "primary" ? colors.white : colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
  },
});

Button.defaultProps = { variant: "default" };

export default Button;
