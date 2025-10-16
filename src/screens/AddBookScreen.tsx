import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { createBook, updateBook } from "../api/config";

interface AddBookScreenProps {
  onClose?: () => void;
  onCreateSuccess: () => void;
  selectedItem: any;
}

const AddBookScreen = ({
  onClose,
  onCreateSuccess,
  selectedItem,
}: AddBookScreenProps) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (selectedItem !== null) {
      console.log("Selected Item is not null", selectedItem);
      setBookName(selectedItem.book_title);
      setAuthorName(selectedItem.name_of_author);
      setCoverUrl(selectedItem.cover);
      setPrice(selectedItem.price_of_book.toString());
    }
  }, [selectedItem]);

  const createNewBook = () => {
    createBook({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        cover: coverUrl,
        price_of_book: Number(price),
      },
      onSuccess: () => {
        Alert.alert("Book created successfully");
        onClose && onClose();
        onCreateSuccess();
      },
      onError: (error: any) => {
        Alert.alert("Error creating book!", error);
      },
    });
  };

  const editBook = () => {
    updateBook({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        cover: coverUrl,
        price_of_book: Number(price),
      },
      id: selectedItem.id,
      onSuccess: () => {
        Alert.alert("Book created successfully");
        onClose && onClose();
        onCreateSuccess();
      },
      onError: (error: any) => {
        Alert.alert("Error creating book!", error);
      },
    });
  };

  return (
    <SafeAreaView>
      <AntDesign
        name="close-circle"
        size={24}
        color="#b80000"
        onPress={onClose}
      />

      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput
          value={bookName}
          placeholder="Book Name"
          onChangeText={setBookName}
        />
        <AppTextInput
          value={authorName}
          placeholder="Author Name"
          onChangeText={setAuthorName}
        />
        <AppTextInput
          value={coverUrl}
          placeholder="Cover Image"
          onChangeText={setCoverUrl}
        />
        <AppTextInput
          value={price}
          placeholder="Book Price"
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <AppButton
          text="Save"
          onPress={selectedItem !== null ? editBook : createNewBook}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: scale(15),
  },
  title: {
    fontWeight: "bold",
    fontSize: scale(16),
    marginBottom: 20,
  },
});
