import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Home">;

const Home: React.FC<Props> = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("ChatRoom", {
      roomId: 123,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button title="Click" onPress={onPressHandler} />
    </View>
  );
};

export default Home;
