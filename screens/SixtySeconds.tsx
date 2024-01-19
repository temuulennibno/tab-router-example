import { Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { DeviceMotion } from "expo-sensors";

export const SixtySeconds = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    DeviceMotion.addListener(({ rotation }) => {
      const { gamma } = rotation;
      const roundedGamma = Math.floor(gamma);
      console.log("Gamma:", roundedGamma);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>60 seconds</Text>
    </View>
  );
};
