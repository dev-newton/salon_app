import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "../../Themes";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

let scale = height / width;

export default StyleSheet.create({
  ServiceItemView: {
    width: "100%",
    height: height / 4,
    paddingLeft: "5%",
    paddingTop: "5%"
  },
  priceView: {
    backgroundColor: "#315b96",
    height: "20%",
    width: "30%",
    borderRadius: 10,
    justifyContent: "center",
    zIndex: 5
  },
  priceText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400"
  },
  serviceImageView: {
    width: "60%",
    height: "75%",
    position: "absolute",
    paddingTop: "15%",
    paddingLeft: "10%"
  },
  serviceImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30
  },
  serviceDescriptionView: {
    height: "65%",
    width: "65%",
    position: "absolute",
    zIndex: -1,
    marginLeft: "35%",
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  serviceTitle: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 5,
    fontSize: 16
  },
  serviceDescription: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: scale * 7,
    paddingTop: 5,
    paddingLeft: 8
  },
  serviceTextView: {
    position: "absolute",
    width: "50%",
    height: "100%",
    zIndex: 1,
    marginLeft: "40%"
  }
});
