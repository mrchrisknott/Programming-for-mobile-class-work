// activity 12 complete
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LocationSearch from "./src/components/LocationSearch";
import WeatherDisplay from './src/components/WeatherDisplay';

export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("Ipswich, UK");
  const apiKey = "5a3c63232831d157dc52f3be86896b6f";
  
  const getWeather = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + apiKey)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);


//        Object {
//          "base": "stations",
//          "clouds": Object {
//            "all": 89,
//          },
//          "cod": 200,
//          "coord": Object {
//            "lat": 52.0592,
//            "lon": 1.1555,
//          },
//          "dt": 1613843256,
//          "id": 2646057,
//          "main": Object {
//            "feels_like": 5.69,
//            "humidity": 66,
//            "pressure": 1002,
//            "temp": 10.52,
//            "temp_max": 12,
//            "temp_min": 8.33,
//          },
//          "name": "Ipswich",
//          "sys": Object {
//            "country": "GB",
//            "id": 1490,
//            "sunrise": 1613804430,
//            "sunset": 1613841481,
//            "type": 1,
//          },
//          "timezone": 0,
//          "visibility": 10000,
//          "weather": Array [
//            Object {
//              "description": "overcast clouds",
//              "icon": "04n",
//              "id": 804,
//              "main": "Clouds",
//            },
//          ],
//          "wind": Object {
//            "deg": 170,
//            "speed": 5.14,
//          },
//        }

        setWeatherData({
          temp: json.main.temp,
          humidity: json.main.humidity,
          pressure: json.main.pressure,
          feelsLike: json.main.feels_like,
          description: json.weather[0].description,
          icon: json.weather[0].icon,
          windSpeed: json.wind.speed
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getWeather();
  }, [location]);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);

  }
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/weather-backgrounds/rain.jpg")} style={styles.imageBackground}>
        <LocationSearch updateLocation={updateLocation} />
        <WeatherDisplay weatherData={weatherData}/>
      </ImageBackground>
      
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
});
