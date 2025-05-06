import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  useWindowDimensions,
  StatusBar,
} from "react-native";

const SplashScreen = () => {
  const { width } = useWindowDimensions();

  const logoSize = width * 0.6;

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="#fafafa" barStyle="dark-content" />
      <Image
        source={require('../assests/images/logo.png')}
        style={{ width: logoSize, height: logoSize }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default SplashScreen;
