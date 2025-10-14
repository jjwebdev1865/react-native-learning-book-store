import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const endpointUrl = "https://68ee7c4fdf2025af7803dc4f.mockapi.io/books";

  const getBooksList = async () => {
    const response = await axios.get(endpointUrl);
    console.log("response", JSON.stringify(response.data, null, 3));
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <Button title="Get Books" onPress={getBooksList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
