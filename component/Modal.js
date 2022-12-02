import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal as ModalReact,
  Pressable,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Modal = ({ value },) => {
  //console.log(value);

  return (
    <>
      <ModalReact
        visible={value[0].modalVisible}
        animationType="slide"
        onRequestClose={() => value[0].changeModalState(false)}
      >
        <SafeAreaView
          style={[styles.container, { backgroundColor: value[1].backgroudColor }]}
        >
          <Pressable onPress={() => value[0].changeModalState(false)}>
            <Text>Close Modal</Text>
          </Pressable>
        </SafeAreaView>
      </ModalReact>
    </>
  );
};

export default Modal;
