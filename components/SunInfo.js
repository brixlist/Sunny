import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "col",
    flex: 1,
    paddingTop: 10,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "200",
    color: "white",
  },
});

const SunInfo = ({ props }) => {
  let date = new Date(props.value * 1000);

  return (
    <View style={styles.subContainer}>

      <Text style={styles.string}>
        {props.icon_id === 2
          ? date.getHours().toString() + ":" + date.getMinutes().toString()
          : '0' + date.getHours().toString() + ":" + date.getMinutes().toString()}
      </Text>
      <Text style={styles.subString}>{props.string}</Text>
    </View>
  );
};

export default SunInfo;
