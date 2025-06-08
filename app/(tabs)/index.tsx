import { styles } from "@/styles/auth.styles";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    console.log("Sign out pressed");
    try {
      await signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
      Alert.alert("Sign out error", "Something went wrong.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSignOut}
        style={{ padding: 12, backgroundColor: "#333", borderRadius: 8 }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign Out Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
