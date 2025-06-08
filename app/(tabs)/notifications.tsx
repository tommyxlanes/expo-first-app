import React from "react";
import { StyleSheet, Text, View } from "react-native";

const notifications = () => {
  return (
    <View style={styles.container}>
      <Text>notificationss</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
});

export default notifications;
