import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 10,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    height: 180,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
  addButton: {
    position: "relative",
    left: width * 0.25,
    backgroundColor: "#6fc984",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    color: "#ffffff",
  },
});

export default styles;
