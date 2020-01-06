import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Text } from "native-base";
import HeaderService from "../Components/HeaderService";
import CheckoutForm from "../Components/CheckoutForm";

// Styles
import styles from "./Styles/CheckoutStyles";

export default class Checkout extends Component {
  render() {
    return (
      <Container>
        <HeaderService navigation={this.props.navigation} />
        <Content style={styles.CheckoutContent}>
          <Text style={styles.Title}>Please enter your info.</Text>
          <CheckoutForm navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}
