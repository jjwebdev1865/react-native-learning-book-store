import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { verticalScale } from "react-native-size-matters";

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  ...otherProps
}: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEFEE",
    width: "100%",
    height: verticalScale(40),
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: verticalScale(15),
  },
});
