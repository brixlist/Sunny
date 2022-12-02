import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";

import { Droplet, Wind, Sunset, MapPin } from "lucide-react-native";

import SvgMedia from "../component/SvgMedia";
import Modal from "../component/Modal";

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
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

const items = StyleSheet.create({
  headerText: {
    fontFamily: "Inter-Regular",
    fontSize: 24,
    fontWeight: 'bold',
  },
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
  locationText: {
    fontFamily: "Inter-Medium",
    fontWeight: "400",
    fontSize: 22,
    paddingLeft: 6,
  },
});

const MainPage = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = props.info;
  const date = new Date(data.sys.sunset + 1000);
  const backgroudColor = props.color;

  //console.log(data);
  
  const changeModalState = (value) => {
    setModalVisible(value);
  }
  
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: props.color }}>
        <View style={[styles.main, { backgroundColor: props.color }]}>
          <Modal value={[{ modalVisible, changeModalState }, backgroudColor]} />
          <View style={styles.top}>
            <Text style={items.headerText}>Current Weather:</Text>
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
        <Pressable style={styles.footer} onPress={() => setModalVisible(true)}>
          <MapPin stroke="black" size={26} />
          <Text style={items.locationText}>{data.name.toString()}</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

export default MainPage;
