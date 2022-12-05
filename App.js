import { useFonts } from "expo-font";

import { useState, useEffect } from "react";

import axios from "axios";

import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";

import * as SplashScreen from "expo-splash-screen";
import * as Location from 'expo-location';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Semibold": require("./assets/fonts/Inter-SemiBold.otf"),
  });

  const [data, setData] = useState({ cod: 500 });
  const [bgColor, setBgColor] = useState("#fff");

  const getWeather = async (lat, long) => {
    try {
      let api_call = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly&appid=d223d72ce260e9719c1aa55a155ffcf9`;
      const resp = await axios.get(api_call);
      setData(resp.data);

      //DEGUG UI
      //resp.data.weather[0].id = 803;
      let x = resp.data.current.weather[0].id;
      data.cod = 200;
      console.log(x);

      switch (true) {
        case x === 800:
          setBgColor("#FDF2CD");
          break;
        case x >= 200 && x <= 232:
          setBgColor("#00b4d8");
          break;
        case x >= 300 && x <= 321:
          setBgColor("#00b4d8");
          break;
        case x >= 500 && x <= 531:
          setBgColor("#007CBE");
          break;
        case x >= 600 && x <= 622:
          setBgColor("white");
          break;
        case x >= 701 && x <= 781:
          setBgColor("#ced4da");
          break;
        case 800:
          setBgColor("#FDF2CD");
          break;
        case x >= 801 && x <= 804:
          setBgColor("#e9ecef");
          break;
        default:
          setBgColor("white");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //console.log(location);
      getWeather(location.coords.latitude, location.coords.longitude);
    })();
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      {data.cod === 500 ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <MainPage props={{ info: data, color: bgColor }} />
        </>
      )}
    </>
  );
}
