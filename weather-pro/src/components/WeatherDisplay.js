import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function WeatherDisplay({ weatherData }) {
  if (weatherData) {
    return (
      <View style={styles.weatherDisplay}>
        <Image
          source={{
            uri:
              "http://openweathermap.org/img/wn/" +
              weatherData.icon +
              "@2x.png",
          }}
          style={styles.weatherIcon}
        />
        <View style={styles.weatherDetails}>
          <Text style={[styles.weatherDetailText, styles.weatherDescription]}>
            {weatherData.description}
          </Text>
          <Text style={styles.weatherDetailText}>
            Temperature: {weatherData.temp} C
          </Text>
          <Text style={styles.weatherDetailText}>
            Feels like: {weatherData.feelsLike} C
          </Text>
          <Text style={styles.weatherDetailText}>
            Humidity: {weatherData.humidity}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.weatherDisplay}>
        <Text style={styles.weatherDetailText}>Loading weather data...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherDisplay: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 15,
    margin: 15,
    padding: 10,
  },
  weatherIcon: {
    width: 120,
    height: 120,
  },
  weatherDetails: {},
  weatherDetailText: {
    fontWeight: "700",
    fontSize: 18,
  },
  weatherDescription: {
    marginBottom: 10
  },

});
