import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./Styles/PromoServiceItemStyles";

export default class PromoServiceItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation("ServiceScreen", {
            title: this.props.text,
            serviceImages: this.props.images,
            serviceTitles: this.props.serviceTitles,
            prices: this.props.prices,
            serviceDescriptions: this.props.serviceDescriptions,
            serviceSize: this.props.serviceSize
          })
        }
      >
        <View style={styles.serviceCard}>
          <View>
            <Image
              style={styles.promoImage}
              resizeMode="contain"
              // blurRadius={1}
              source={this.props.image}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.seviceTitle}>{this.props.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
