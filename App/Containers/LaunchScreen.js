import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Drawer } from "native-base";
import Sidebar from "../Containers/Sidebar";

// Styles
import styles from "./Styles/LaunchScreenStyles";

import HeaderLanding from "../Components/HeaderLanding";
import PromoServiceItem from "../Components/PromoServiceItem";

let serviceItemOne = require("../Images/salon.jpg");
let serviceItemTwo = require("../Images/salon2.jpg");
let serviceItemThree = require("../Images/salon3.jpg");

export default class LaunchScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  goToMakeUp = () => {
    this.props.navigation.navigate("ServiceScreen", {
      title: "MAKE UP",
      serviceTitles: ["REGULAR MAKEUP", "CLASSIC MAKEUP", "PREMIUM MAKEUP"],
      serviceDescriptions: [
        "Minor changes here and there, just the basics",
        "Want to look and feel like a model",
        " For the elegant and classy lady"
      ],
      prices: ["100", "220", "750"],
      serviceImages: [serviceItemOne, serviceItemThree, serviceItemTwo],
      serviceSize: 3
    });
    this.closeDrawer();
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <Sidebar
            goToMakeUp={this.goToMakeUp}
            goToManicure={this.goToManicure}
            goToBrushes={this.goToBrushes}
            goToCart={this.goToCart}
          />
        }
        onClose={() => this.closeDrawer()}
      >
        <View style={styles.mainContainer}>
          <HeaderLanding navigation={navigate} openDrawer={this.openDrawer} />
          <ScrollView style={styles.scroll}>
            <PromoServiceItem
              navigation={navigate}
              image={serviceItemOne}
              text={"MAKE UP"}
              serviceTitles={["REGULAR", "CLASSIC", "PREMIUM"]}
              serviceDescriptions={[
                "Minor changes here and there, just the basics",
                "Want to look and feel like a model",
                " For the elegant and classy lady"
              ]}
              prices={["100", "220", "750"]}
              images={[serviceItemOne, serviceItemThree, serviceItemTwo]}
              serviceSize={3}
            />
            <PromoServiceItem
              navigation={navigate}
              image={serviceItemTwo}
              text={"MANICURE"}
              serviceTitles={["REGULAR", "CLASSIC", "PREMIUM"]}
              serviceDescriptions={[
                "Minor changes here and there, just the basics",
                "Want to look and feel like a model?",
                " For the elegant and classy lady"
              ]}
              prices={["100", "220", "750"]}
              images={[serviceItemOne, serviceItemThree, serviceItemTwo]}
              serviceSize={3}
            />
            <PromoServiceItem
              navigation={navigate}
              image={serviceItemThree}
              text={"BRUSHES"}
              serviceTitles={["REGULAR", "CLASSIC", "PREMIUM"]}
              serviceDescriptions={[
                "Minor changes here and there, just the basics",
                "Want to look and feel like a model",
                " For the elegant and classy lady"
              ]}
              prices={["100", "220", "750"]}
              images={[serviceItemOne, serviceItemThree, serviceItemTwo]}
              serviceSize={3}
            />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}
