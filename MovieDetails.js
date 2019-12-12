import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const MovieDetails = props => {
  const movie = props.navigation.getParam("movie");

  return (
    <View style={styles.container}>
      <View style={styles.movieHeader}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-round-back" color="white" size={38} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-heart" color="white" size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/original/${movie.backdrop_path}`
          }}
          style={styles.poster}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.watchBtn}>
            <Text style={styles.watchBtnText}>Watch now</Text>
          </TouchableOpacity>
          {movie.vote_average < 3 && (
            <FontAwesome name="star" size={20} color="yellow" />
          )}
          {movie.vote_average >= 3 && (
            <>
              <FontAwesome name="star" size={20} color="yellow" />
              <FontAwesome name="star" size={20} color="yellow" />
            </>
          )}
          {movie.vote_average >= 4 && (
            <>
              <FontAwesome name="star" size={20} color="yellow" />
              <FontAwesome name="star" size={20} color="yellow" />
              <FontAwesome name="star" size={20} color="yellow" />
            </>
          )}
        </View>
        <Text style={styles.movieText}>{movie.overview}</Text>
        <Text style={styles.movieStat}>Release Date: {movie.release_date}</Text>
      </View>
    </View>
  );
};

MovieDetails.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  movieHeader: {
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "transparent",
    position: "absolute",
    top: 30,
    width: "100%",
    zIndex: 900
  },
  header: {
    flex: 2
  },
  poster: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  backBtn: {},
  headerBtnText: {
    color: "#fff"
  },
  content: {
    flex: 3,
    backgroundColor: "#2C3848",
    padding: 25
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 15
  },
  watchBtn: {
    backgroundColor: "#6b737f",
    width: 150,
    height: 40,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  watchBtnText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  movieText: {
    color: "#fff",
    opacity: 0.6,
    fontSize: 18,
    lineHeight: 28,
    marginVertical: 20
  },
  movieStat: {
    fontWeight: "bold",
    marginVertical: 14
  }
});
export default MovieDetails;
