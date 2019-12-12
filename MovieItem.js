import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const MovieItem = props => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.posterWrapper}
        onPress={props.onTap}
      >
        <Image
          style={styles.poster}
          source={{ uri: `http://image.tmdb.org/t/p/w500/${props.image}` }}
        />
      </TouchableOpacity>
      <Text style={styles.movieTitle}>{props.title}</Text>
      {/* <View style={styles.raitng}>
        <IoIosStar />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  posterWrapper: {
    marginRight: 20
  },
  poster: {
    width: 150,
    height: 200,
    borderRadius: 10
  },
  movieTitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    width: "60%"
  }
});

export default MovieItem;
