import { StyleSheet, Platform, Dimensions } from "react-native";
import { Fonts, Colors } from "../../Themes/";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  BackgroundImage: {
    width: "100%",
    height: "100%"
  },
  ServiceContent: {
    position: "absolute",
    flex: 0,
    marginTop: "20%",
    width: "100%",
    height: "100%"
  },
  Name: {
    height: height / 3,
    width: width / 2,
    marginLeft: "5%"
  },
  TitleText: {
    position: "absolute",
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: "30%"
  },
  NameText: {
    position: "absolute",
    color: "#fff",
    fontSize: 28,
    fontWeight: "200",
    marginTop: "30%"
  },
  Price: {
    marginLeft: "5%",
    height: height / 3,
    width: "30%",
    alignItems: "center"
  },
  PriceText: {
    position: "absolute",
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "50%"
  },
  NameAndPrice: {
    flexDirection: "row"
  },
  AddButton: {
    backgroundColor: "#315b96",
    marginLeft: "5%",
    marginTop: 100,
    height: 50,
    width: 120,
    borderRadius: 20
  },
  AddText: {
    fontSize: 22,
    paddingLeft: 10,
    color: "white",
    fontWeight: "500"
  },
  AddIcon: {
    color: "white",
    fontSize: 30,
    paddingRight: 10
  }
});
