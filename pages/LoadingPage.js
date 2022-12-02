import { StyleSheet, Text, View } from "react-native";

const loadingStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  loadingTitle: {
    color: "black",
    fontFamily: "Inter-Thin",
    fontSize: 12,
  },
  checkTitle: {
    color: "black",
    fontFamily: "Inter-Thin",
    fontSize: 10,
    paddingTop: 6,
  },
});

const LoadingPage = () => {
  return (
    <>
      <View style={loadingStyles.loadingContainer}>
        <Text style={loadingStyles.loadingTitle}>Loading data...</Text>
        <Text style={loadingStyles.checkTitle}>
          check your internet connection!
        </Text>
      </View>
    </>
  );
};

export default LoadingPage;
