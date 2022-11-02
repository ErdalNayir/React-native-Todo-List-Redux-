import React from "react";
import { View } from "react-native";
import FAB from "../../components/FAB";
import GoalList from "../../components/GoalList";
import styles from "./homescreenStyle";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function Homescreen({ prop }) {
  return (
    <View style={styles.container}>
      <GoalList></GoalList>
      <FAB title={<Icon name="plus" color={"#ffffff"} size={24} />}></FAB>
    </View>
  );
}

export default Homescreen;
