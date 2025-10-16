import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

interface AppButtonProps {
  text: string;
  onPress?: () => void;
}

const AppButton = ({ text, onPress }: AppButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1273DE",
    height: verticalScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    color: "#FFFFFF",
    fontSize: scale(16),
    fontWeight: "bold",
  },
});
