import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { HomeIcon } from "./icons/HomeIcon";
import { InfoIcon } from "./icons/InfoIcon";
import { createStackNavigator } from "@react-navigation/stack";
import { Home1 } from "./screens/Home1";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Home1" component={Home1} />
    </HomeStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red", headerShown: false, tabBarItemStyle: { marginBottom: -30 } }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeStackNavigator}
          options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} />, tabBarShowLabel: false }}
        />
        <Tab.Screen name="About" component={About} options={{ tabBarIcon: ({ color }) => <InfoIcon color={color} />, tabBarShowLabel: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const HomeTab = createBottomTabNavigator();

// const HomeTabScreens = () => {
//   return (
//     <HomeTab.Navigator screenOptions={{ headerShown: false }}>
//       <HomeTab.Screen name="HomeTab" component={Home} />
//       <HomeTab.Screen name="AboutTab" component={About} />
//     </HomeTab.Navigator>
//   );
// };

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="FirstScreen" component={HomeTabScreens} />
//         <Stack.Screen name="Home1" component={Home1} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
