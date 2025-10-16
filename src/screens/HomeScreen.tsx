import { StyleSheet, View, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookById, getBooksList } from "../api/config";
import AddButton from "../components/AddButton";
import { verticalScale } from "react-native-size-matters";
import AddBookScreen from "./AddBookScreen";

type Book = {
  id: string;
  name_of_author: string;
  cover: string;
  price_of_book: number;
  book_title: string;
  email_of_seller: string;
};

const HomeScreen = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const getBookListFn = () => {
    getBooksList({
      onSuccess: (books: any) => setBookList(books.data),
      onError: (error: any) => console.error("Error fetching books:", error),
    });
  };

  useEffect(() => {
    getBookListFn();
  }, []);

  const onDeleteItem = (item: any) => {
    console.log("Delete item", item.id);
    deleteBookById({
      onSuccess: () => getBookListFn(),
      onError: (error: any) => console.error("Error deleting book:", error),
      itemId: item.id,
    });
  };

  const onEditItem = (item: any) => {
    console.log("Edit item", item);
    // Implement edit functionality here
    setSelectedBook(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            authorName={item.name_of_author}
            coverImageUrl={item.cover}
            price={item.price_of_book.toString()}
            bookName={item.book_title}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      />

      <AddButton
        onPress={() => {
          setModalVisible(true);
          setSelectedBook(null);
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onClose={() => setModalVisible(false)}
          onCreateSuccess={getBookListFn}
          selectedItem={selectedBook}
        />
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(30),
  },
});
