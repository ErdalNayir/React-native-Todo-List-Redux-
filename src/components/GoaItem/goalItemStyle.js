import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "93%",
    backgroundColor: "#224987",
    marginTop: 6,
    padding: 6,
    borderRadius: 10,
    flex: 1,
  },

  itemContainerCompleted: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "93%",
    backgroundColor: "#514987",
    marginTop: 6,
    padding: 6,
    borderRadius: 10,
    flex: 1,
  },

  itemText: {
    color: "#ffffff",
    fontSize: 20,
  },

  itemTextCompleted: {
    color: "lightgray",
    fontSize: 20,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default styles;
