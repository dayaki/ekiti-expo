import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MovieItem from "./MovieItem";
import LottieView from "lottie-react-native";

const Movies = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(response => {
        setMovies(response.results);
        console.log("res", response.results);
      });
  }, []);

  const ApiKey = "3cb3769fd283270e562b5afc5379a7c4";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;

  const openDetails = movie => {
    props.navigation.navigate("Details", { movie: movie });
  };

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <>
          <View style={styles.header}>
            <Text style={styles.Intro}>Hello, what do you want to watch?</Text>
            <TextInput
              style={styles.search}
              placeholder="Search"
              placeholderTextColor="rgba(255,255,255,0.6)"
            />
          </View>

          <View style={styles.moviesWrapper}>
            <View style={styles.movieBox}>
              <View style={styles.movieNav}>
                <Text style={styles.movieNavText}>Recommended for you</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.movieNavBtnText}>See all</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 20 }}
              >
                {movies.map(movie => (
                  <MovieItem
                    key={movie.id}
                    title={movie.original_title}
                    image={movie.poster_path}
                    rating={5}
                    onTap={() => openDetails(movie)}
                  />
                ))}
              </ScrollView>
            </View>

            <View style={styles.movieBox}>
              <View style={styles.movieNav}>
                <Text style={styles.movieNavText}>Top rated</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text>See all</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 20 }}
              >
                {movies.map(movie => (
                  <MovieItem
                    key={movie.id}
                    title={movie.original_title}
                    image={movie.poster_path}
                    rating={5}
                    onTap={() => openDetails(movie)}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <LottieView
            autoPlay
            loop
            source={require("./assets/animation.json")}
          ></LottieView>
        </View>
      )}
    </View>
  );
};

Movies.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#5DA0D3",
    padding: 40
  },
  Intro: {
    fontSize: 25,
    color: "#fff",
    marginTop: 30
  },
  search: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 20,
    height: 35,
    paddingLeft: 15,
    marginTop: 30
  },
  moviesWrapper: {
    backgroundColor: "#2C3848",
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -15
  },
  movieBox: {},
  movieNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  movieNavText: {
    color: "#fff",
    textTransform: "uppercase"
  },
  movieNavBtnText: {
    color: "rgba(255,255,255,0.5)"
  }
});

export default Movies;
