import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { io } from "socket.io-client";
import ChatRoom from "./Screens/ChatRoom";
import Home from "./Screens/Home";

const BACK_END_URI = "http://192.168.0.101:5000";

export const socket = io(BACK_END_URI);

export type RootStackParams = {
  Home: undefined;
  ChatRoom: {
    roomId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
