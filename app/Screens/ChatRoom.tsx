import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "ChatRoom">;

const ChatRoom: React.FC<Props> = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route.params ? route.params.roomId : undefined);
  }, []);

  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat Room</Text>
      <Button title="Back Home" onPress={onPressHandler} />
    </View>
  );
};

export default ChatRoom;
