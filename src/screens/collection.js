import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView, Image } from "react-native";
import { AntDesign, Foundation } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { common } from "../styles/common";
import { COLORS } from "../styles/colors";

export default function Collection() {
  const data = [
    {
      image: require("../../assets/images/car.jpg"),
      name: "the vintage",
      like: 11233,
      disLike: 444,
      price: 45542,
    },
    {
      image: require("../../assets/images/fer.jpg"),
      name: "sporty",
      like: 1333,
      disLike: 44,
      price: 29998,
    },
    {
      image: require("../../assets/images/red.jpg"),
      name: "bleeded",
      like: 132323,
      disLike: 666,
      price: 76554,
    },
    {
      image: require("../../assets/images/dor.jpg"),
      name: "wolfer",
      like: 112,
      disLike: 11,
      price: 65444,
    },
    {
      image: require("../../assets/images/benz.jpg"),
      name: "classic",
      like: 9988,
      disLike: 941,
      price: 10998,
    },
    {
      image: require("../../assets/images/sport.jpg"),
      name: "red devil",
      like: 33331,
      disLike: 234,
      price: 34567,
    },
    {
      image: require("../../assets/images/white.jpg"),
      name: "jebra",
      like: 122,
      disLike: 844,
      price: 34223,
    },
  ];

  const renderItem = (row) => {
    const { item } = row;

    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.carNameText}>{item.name.toUpperCase()}</Title>
          <Card.Cover style={styles.image} source={item.image} />
          <View style={styles.footerContainer}>
            <View style={styles.likeContainer}>
              <AntDesign name="like1" size={14} color={COLORS.blue} />
              <Paragraph style={styles.likeText}>{item.like}</Paragraph>
              <AntDesign name="dislike1" size={14} color={COLORS.red} />
              <Paragraph style={styles.disLikeText}>{item.disLike}</Paragraph>
            </View>
            <View style={styles.moneyContainer}>
              <Foundation name="dollar-bill" size={34} color={COLORS.green} />
              <Paragraph style={styles.priceText}>{item.price}</Paragraph>
            </View>
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
  image: {
    borderWidth: 1,
    borderRadius: 15,
  },
  likeText: {
    marginLeft: 2,
    color: COLORS.black,
    marginRight: 3,
  },
  disLikeText: {
    marginLeft: 2,
    color: COLORS.grey,
  },
  priceText: {
    marginLeft: 5,
    color: COLORS.black,
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  carNameText: {
    fontSize: 19,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
