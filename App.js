import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { useState, useEffect } from "react";

import axios from "axios";

import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import AssetsData from "./data/AssetsData";

import MainInfo from "./components/MainInfo";
import SunInfo from "./components/SunInfo";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
  });
  const [data, setData] = useState({ cod: 500 });
  const [img, setImg] = useState(require(`./assets/weather_icon/unknown.png`));

  const getWeather = async (lat, long) => {
    try {
      let api_call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=d223d72ce260e9719c1aa55a155ffcf9`;
      const resp = await axios.get(api_call);
      setData(resp.data);

      let s = AssetsData.filter((a) => a.code === resp.data.weather[0].icon);
      console.log(s);
      setImg(s[0].img);
    } catch (err) {
      console.log(err);
    }
  };

  const getLogLat = async () => {
    try {
      //HIDE API KEY
      const resp = await axios.get(
        "https://api.ipgeolocation.io/ipgeo?apiKey=2d879b54fca84128900e20b8852be500"
      );
      getWeather(resp.data.latitude, resp.data.longitude);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLogLat();
  }, []);

  return (
    <>
      {data.cod === 500 ? (
        <>
          <View style={loadingStyles.loadingContainer}>
            <Text style={loadingStyles.loadingTitle}>Loading data...</Text>
          </View>
        </>
      ) : (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={mainStyles.mainContaier}>
              <View style={mainStyles.topContainer}>
                <Text style={childStyles.locationItem}>
                  {data.name.toString().toUpperCase()}
                </Text>
              </View>
              <View style={mainStyles.imgContainer}>
                <Image
                  style={childStyles.img}
                  source={img}
                ></Image>
                <Text style={childStyles.tempString}>
                  {"its " + data.weather[0].main.toString()}
                </Text>
                <Text style={childStyles.tempItem}>
                  {Math.floor(parseInt(data.main.temp)) + "°"}
                </Text>
              </View>
              <View style={mainStyles.bottomContainer}>
                <MainInfo
                  props={{
                    temp_max: data.main.temp_max,
                    icon_id: 1,
                    string: `Temp Max`,
                  }}
                />
                <MainInfo
                  props={{
                    temp_max: data.main.temp_min,
                    icon_id: 2,
                    string: `Temp Min`,
                  }}
                />
                <MainInfo
                  props={{
                    temp_max: data.wind.speed,
                    icon_id: 3,
                    string: `Wind speed`,
                  }}
                />
              </View>
              <View style={mainStyles.bottomContainer}>
                <SunInfo
                  props={{
                    value: data.sys.sunrise,
                    icon_id: 1,
                    string: "Sunrise",
                  }}
                />
                <SunInfo
                  props={{
                    value: data.sys.sunset,
                    icon_id: 2,
                    string: "Sunset",
                  }}
                />
              </View>
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>
        </>
      )}
    </>
  );
}

const loadingStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#0B0C1D",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingTitle: {
    color: "white",
    fontFamily: "Inter-Medium",
    fontSize: 24,
  },
});

const mainStyles = StyleSheet.create({
  mainContaier: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    backgroundColor: "white",
  },
  topContainer: {
    alignItems: "center",
    paddingTop: 6,
  },
  imgContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
  bottomContainer: {
    paddingTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

const childStyles = StyleSheet.create({
  locationItem: {
    fontWeight: "600",
    fontFamily: "Inter-Medium",
    fontSize: 24,
    color: "black",
  },
  tempItem: {
    paddingTop: 10,
    fontWeight: "900",
    fontFamily: "Inter-Medium",
    fontSize: 82,
    color: "black",
  },
  img: {
    width: 200,
    height: 200,
    justifyContent: "center",
  },
  tempString: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Inter-Medium",
    color: "black",
  },
});
