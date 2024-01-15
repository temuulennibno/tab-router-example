import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { HomeIcon } from "./icons/HomeIcon";
import { InfoIcon } from "./icons/InfoIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red", headerShown: false, tabBarItemStyle: { marginBottom: -30 } }}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} />, tabBarShowLabel: false }} />
        <Tab.Screen name="About" component={About} options={{ tabBarIcon: ({ color }) => <InfoIcon color={color} />, tabBarShowLabel: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
