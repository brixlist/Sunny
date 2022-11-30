import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import { Droplet, Wind, Sunset } from "lucide-react-native";

import { useEffect, useState } from "react";

import SvgMedia from "../component/SvgMedia";

const styles = StyleSheet.create({
  main: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: 'center',
  },
  top: {
    flex: 4,
    //justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 2,
    paddingTop: 130,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});

const items = StyleSheet.create({
  temp: {
    fontFamily: "Inter-Regular",
    fontSize: 218,
    fontWeight: "bold",
  },
  subTop: {
    position: "relative",
    zIndex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  subBottom: {
    position: "absolute",
    top: 130,
    zIndex: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "col",
  },
  iconText: {
    fontFamily: "Inter-Black",
    fontSize: 12,
    paddingTop: 12,
  },
});

const MainPage = ({ props }) => {
  console.log(props)
  const data = props.info;
  const date = new Date(data.sys.sunset + 1000);

  console.log(data);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: props.color }}>
        <View style={[styles.main, { backgroundColor: props.color }]}>
          <View style={styles.top}>
            <View style={items.subTop}>
              <Text style={items.temp}>
                {Math.floor(parseInt(data.main.temp)) + "°"}
              </Text>
            </View>
            <View style={items.subBottom}>
              <SvgMedia props={{ code: data.weather[0].id }} />
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={items.iconRow}>
              <Droplet color="black" size={32} />
              <Text style={items.iconText}>{data.main.humidity + " %"}</Text>
            </View>
            <View style={items.iconRow}>
              <Wind color="black" size={32} />
              <Text style={items.iconText}>
                {data.wind.speed.toString() + " km/h"}
              </Text>
            </View>
            <View style={items.iconRow}>
              <Sunset color="black" size={32} />
              <Text style={items.iconText}>
                {date.getHours().toString().length === 1
                  ? "0" + date.getHours() + ":" + date.getMinutes()
                  : date.getHours() + ":" + date.getMinutes()}
              </Text>
            </View>
          </View>
        </View>
        {/*<View><Text>footer</Text></View>*/}
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

export default MainPage;
