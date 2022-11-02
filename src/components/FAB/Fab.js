import React, { useState } from "react";
import styles from "./fabStyle";
import { Pressable } from "react-native";
import CustomModal from "../Modal/CustomModal";

function Fab({ title }) {
  const [isVisible, setModalVisible] = useState(false);

  function onPressAddModal() {
    setModalVisible(!isVisible);
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "#3f653A" : "#26653A",
        },
        styles.wrapperCustom,
      ]}
      onPress={onPressAddModal}>
      {title}
      <CustomModal
        isModalVisible={isVisible}
        setModalVisible={setModalVisible}></CustomModal>
    </Pressable>
  );
}

export default Fab;
