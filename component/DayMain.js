import React from "react";

import { StyleSheet, View, Text } from "react-native";
import SvgMedia from "./SvgMedia";

const styles = new StyleSheet.create({
  singleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 12,
    marginHorizontal: 6,
  },
  tempText: {

  },
  dayText: {
    
  }
});

const DayMain = ({ props }) => {
  //console.log(props);
  return (
    <>
        <View style={styles.singleView}>
          <SvgMedia props={{ code: props.weather[0].id, size: 40 }} />
          <Text>{Math.floor(parseInt(props.temp.day)) + "°"}</Text>
        </View>
    </>
  );
};

export default DayMain;
