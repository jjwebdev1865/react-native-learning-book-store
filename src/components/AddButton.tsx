import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

interface AddButtonProps {
  onPress?: () => void;
}

const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={scale(30)} color="#FFF" />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: "#1273DE",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: verticalScale(20),
  },
});
