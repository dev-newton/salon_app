import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ParentView: {
    height: "100%",
    width: "100%"
  },
  FooterContainer: {
    height: 150,
    width: "100%",
    backgroundColor: "#EF6464",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  FooterText: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    marginTop: 5
  }
});
