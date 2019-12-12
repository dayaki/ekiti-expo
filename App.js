import React from "react";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import Fondle from "./Fondle";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  Movies: {
    screen: Movies
  },
  Details: {
    screen: MovieDetails
  },
  DogPage: {
    screen: Fondle
  }
});

export default createAppContainer(AppNavigator);
