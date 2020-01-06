import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./Styles/ServiceItemStyles";

let service = require("../Images/salon.jpg");

export default class ServiceItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("ServiceDetails", {
            image: this.props.serviceImage,
            name: this.props.serviceTitle,
            price: this.props.price,
            title: this.props.title
          });
        }}
      >
        <View style={styles.ServiceItemView}>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>${this.props.price}</Text>
          </View>
          <View style={styles.serviceImageView}>
            <Image
              resizeMode="cover"
              source={this.props.serviceImage}
              style={styles.serviceImage}
            />
          </View>
          <View style={styles.serviceDescriptionView}>
            <View style={styles.serviceTextView}>
              <Text style={styles.serviceTitle}>{this.props.serviceTitle}</Text>
              <Text style={styles.serviceDescription}>
                {this.props.serviceDescription}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
