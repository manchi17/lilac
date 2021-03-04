import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { COLORS } from "../styles/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/car.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/fer.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/red.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/dor.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/benz.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/sport.jpg")} />
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require("../../assets/images/white.jpg")} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: COLORS.bacground,
  },
  scrollView: {
    margin: 7,
    
  },
  card:{marginBottom:10}
});
