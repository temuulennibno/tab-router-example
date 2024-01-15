import { Button, Text, View } from "react-native";

export const Home1 = ({ navigation, route }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello from home1 screen</Text>
      <Button title="Go to about" onPress={() => navigation.navigate("AboutTab")} />
    </View>
  );
};
