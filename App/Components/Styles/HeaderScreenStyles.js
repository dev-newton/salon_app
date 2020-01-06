import { StyleSheet, Platform } from "react-native";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  Body: {
    flex: 1,
    alignItems: "center"
  },
  Left: {
    flex: 1
  },
  Right: {
    flex: 1
  },
  titleText: {
    fontFamily: "cursive",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  headerStyle: {
    backgroundColor: "#EF6464"
  },
  iconStyle: {
    textAlign: "center"
  },
  headerContainer: {
    height: Platform.OS === "ios" ? "10%" : "8%",
    flex: 0,
    zIndex: 5
  },
  Count: {
    color: "white",
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 18,
    position: "absolute",
    right: 40
  }
});
