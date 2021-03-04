import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function News() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flex: 8.5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.line}>News</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
    marginLeft: 15,
  },
  line: {
    fontSize: 23,
    fontWeight: "700",
  },
});
