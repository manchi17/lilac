import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { common } from "../styles/common";
import { COLORS } from "../styles/colors";

export default function Quote() {
  const data = [
    {
      quote:
        "Money may not buy happiness, but I’d rather cry in a Jaguar than on a bus",
      name: "Françoise Sagan",
    },
    {
      quote:
        "I’ve always been asked, ‘What is my favorite car?’ and I’ve always said ‘The next one",
      name: "Carroll Shelby",
    },
    {
      quote:
        "A dream without ambition is like a car without gas… you’re not going anywhere",
      name: "Sean Hampton",
    },
    {
      quote:
        "I couldn’t find the sports car of my dreams, so I built it myself",
      name: "Prince Philip",
    },
    {
      quote: "Everything in life is somewhere else, and you get there in a car",
      name: "Ferdinand Porsche",
    },
    {
      quote:
        "There’s a lot of stress… but once you get in the car, all that goes out the window.",
      name: "Earl Wilson",
    },
    {
      quote:
        "The time is right for electric cars – in fact the time is critical",
      name: "Erma Bombeck",
    },
    {
      quote:
        "When a man opens a car door for his wife, it’s either a new car or a new wife",
      name: "Prince Philip",
    },
    {
      quote:
        "I know a lot about cars, man. I can look at any car’s headlights and tell you exactly which way it’s coming",
      name: "Mitch Hedberg",
    },
    {
      quote:
        "A car is like a mother-in-law – if you let it, it will rule your life.",
      name: "Jaime Lerner",
    },
  ];

  const renderItem = (row) => {
    const { item } = row;
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.quoteText}>{item.quote}</Title>
          <View style={styles.nameContainer}>
            <Entypo name="user" size={12} color={COLORS.blue} />
            <Paragraph style={styles.nameText}>{item.name}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <SafeAreaView style={common.container}>
      <FlatList
        data={data}
        renderItem={(row) => renderItem(row)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}${index}`}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
    marginLeft: 15,
  },
  card: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  nameText: {
    alignSelf: "flex-end",
    marginLeft: 5,
    color: COLORS.blue,
  },
  quoteText: {
    fontSize: 19,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
