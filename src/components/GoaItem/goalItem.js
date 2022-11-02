import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./goalItemStyle";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/slices/todoSlice";

function GoalItem({ listDataItem }) {
  const dispatch = useDispatch();
  function onClickActivate(id) {
    dispatch(updateTodo(listDataItem.id));
  }

  return (
    <Pressable onLongPress={onClickActivate} key={listDataItem.id}>
      <View
        style={
          listDataItem.completed
            ? styles.itemContainerCompleted
            : styles.itemContainer
        }>
        <Text
          style={
            listDataItem.completed ? styles.itemTextCompleted : styles.itemText
          }>
          {listDataItem.description}
        </Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;
