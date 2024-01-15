import { Button, Text, View } from "react-native";

export const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello from home screen</Text>
      <Button title="Go to home1" onPress={() => navigation.navigate("Home1")} />
    </View>
  );
};
