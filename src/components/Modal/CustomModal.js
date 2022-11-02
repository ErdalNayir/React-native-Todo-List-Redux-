import React from "react";
import {
  Modal,
  View,
  TextInput,
  Text,
  Pressable,
  ToastAndroid,
} from "react-native";
import styles from "./customModalStyle";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "../../redux/slices/formSlice";
import { addTodos } from "../../redux/slices/todoSlice";

function CustomModal({ isModalVisible, setModalVisible }) {
  const data = useSelector((state) => state.forms.data);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  function showToastSuccess() {
    ToastAndroid.show("Görev başarıyla eklendi!", ToastAndroid.SHORT);
  }

  function onCloseReq() {
    if (isModalVisible) {
      setModalVisible(!isModalVisible);
    }
  }

  function showToastFail() {
    ToastAndroid.show(
      "Ekleyeceğiniz görev uzunluğu 5 ile 30 arasında olmalı ",
      ToastAndroid.LONG
    );
  }

  function onClickedOut() {
    setModalVisible(!isModalVisible);
  }

  function handleChange(value) {
    dispatch(updateText(value));
  }

  function handleSubmit() {
    if (data.text.length < 5 || data.text.length > 30) {
      showToastFail();
      dispatch(updateText(""));
    } else {
      dispatch(addTodos({ description: data.text }));
      showToastSuccess();
      dispatch(updateText(""));
      setModalVisible(!isModalVisible);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isModalVisible}
      animationDuration={2}
      onRequestClose={onCloseReq}
      presentationStyle="overFullScreen">
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
          <TextInput
            placeholder="Eklenecek Görevi Yazın..."
            style={styles.textInput}
            value={data.text}
            onChangeText={handleChange}
          />
          <Pressable onPress={handleSubmit}>
            <Text style={styles.addButton}>Ekle</Text>
          </Pressable>

          {/** This button is responsible to close the modal */}
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;
