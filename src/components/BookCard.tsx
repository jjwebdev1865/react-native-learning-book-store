import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

interface BookCardProps {
  bookName: string;
  price: string;
  authorName: string;
  coverImageUrl: string;
  onDeleteItem: () => void;
  onEditItem: () => void;
}

const BookCard = ({
  bookName,
  price,
  authorName,
  coverImageUrl,
  onDeleteItem,
  onEditItem,
}: BookCardProps) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image source={{ uri: coverImageUrl }} style={styles.coverImage} />

      {/* Details section */}
      <View style={styles.detailContainer}>
        <Text style={styles.bookName}>{bookName}</Text>
        <Text style={styles.authorName}>{authorName}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      {/* Delete and Edit buttons */}
      <View style={styles.deleteEditContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={onDeleteItem}>
          <MaterialIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={onEditItem}>
          <AntDesign name="edit" size={20} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: scale(10),
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: scale(10),
  },
  coverImage: {
    height: scale(120),
    width: "25%",
    borderRadius: scale(8),
    resizeMode: "stretch",
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
  bookName: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#000",
  },
  authorName: {
    fontSize: scale(14),
    color: "#888",
    marginVertical: verticalScale(3),
  },
  price: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#25a",
  },
  deleteEditContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleButton: {
    height: scale(35),
    width: scale(35),
    borderRadius: scale(20),
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginStart: scale(10),
  },
});
