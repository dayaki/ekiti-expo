import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Fondle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Fondle</Text>
      <Text style={styles.subIntro}>
        The only place to get the best meals in Ekiti state
      </Text>
    </View>
  );
};

Fondle.navigationOptions = {
  title: "Fondle Page"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D12E2E",
    paddingTop: 100,
    alignItems: "center"
  },
  intro: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase"
  },
  subIntro: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#fff",
    marginTop: 30,
    width: "55%",
    lineHeight: 23
  }
});

export default Fondle;
