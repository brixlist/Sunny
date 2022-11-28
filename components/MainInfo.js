import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "col",
    flex: 1,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    justifyContent: "center",
  },
  string: {
    margin: -5,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-Medium",
    fontWeight: "300",
    color: "white",
  },
  subString: {
    paddingTop: 7,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Medium",
    fontWeight: "2s00",
    color: "white",
  },
});

const MainInfo = ({ props }) => {
    const unit = props.icon_id <= 2 ? "°" : " km/h";

  return (
    <View style={styles.subContainer}>
      <Image
        style={styles.img}
        source={require(props.icon_id === 1
          ? `./../assets/weather_icon/higher.svg`
          : props.icon_id === 2
          ? `./../assets/weather_icon/lowest.svg`
          : `./../assets/weather_icon/windsock.svg`)}
      ></Image>
      <Text style={styles.string}>
        {Math.floor(parseInt(props.temp_max)).toString() + unit}
      </Text>
      <Text style={styles.subString}>{props.string}</Text>
    </View>
  );
};

export default MainInfo;