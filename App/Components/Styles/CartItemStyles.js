import { StyleSheet, Platform, Dimensions } from "react-native";
import { Fonts, Colors } from "../../Themes/";

export default StyleSheet.create({
  ItemContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  ItemImage: {
    width: 100,
    height: 100,
    borderRadius: 20
  },
  BodyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 150
  },
  ItemTextContainer: {
    marginRight: 55,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  ItemTitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
  ItemPrice: {
    color: "grey",
    fontSize: 14
  },
  ItemCounterContainer: {
    position: "absolute",
    right: 0,
    width: 110,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  ItemCountUp: {
    fontSize: Platform.OS === "ios" ? 50 : 30,
    color: "#233567"
  },
  ItemCountText: {
    fontSize: 15,
    color: "black",
    marginRight: 3
  },
  ItemCountDown: {
    fontSize: Platform.OS === "ios" ? 50 : 30,
    color: "grey"
  },
  rowBack: {
    flex: 1,
    width: "100%",
    marginLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  Button: {
    height: 150,
    marginRight: 20,
    width: 100,
    justifyContent: "center"
    // paddingLeft: 60,
  }
});
