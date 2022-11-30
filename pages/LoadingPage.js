import { StyleSheet, Text, View } from "react-native";

const loadingStyles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    loadingTitle: {
      color: "black",
      fontFamily: "Inter-Thin",
      fontSize: 12,
    },
  });

const LoadingPage = () => {
  return (
    <>
      <View style={loadingStyles.loadingContainer}>
        <Text style={loadingStyles.loadingTitle}>Loading data...</Text>
      </View>
    </>
  );
};

export default LoadingPage;
