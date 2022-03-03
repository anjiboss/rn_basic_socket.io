import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { io } from "socket.io-client";

const BACK_END_URI = "http://192.168.0.101:5000";

export const socket = io(BACK_END_URI);

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("clicked", () => {
      setCount((prev) => prev + 1);
    });
  }, []);

  const onPressHandler = () => {
    socket.emit("click");
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="click me" onPress={onPressHandler} />
      <StatusBar style="auto" />
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
