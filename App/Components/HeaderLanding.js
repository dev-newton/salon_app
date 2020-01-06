import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button
} from "native-base";
import { connect } from "react-redux";

// Styles
import styles from "./Styles/HeaderScreenStyles";

class HeaderLanding extends Component {
  render() {
    return (
      <Container style={styles.headerContainer}>
        <Header style={styles.headerStyle}>
          <Left style={styles.Left}>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon style={styles.iconStyle} name="menu" />
            </Button>
          </Left>
          <Body style={styles.Body}>
            <Text style={styles.titleText}>Jaynies</Text>
          </Body>
          <Right style={styles.Right}>
            <Text style={styles.Count}>
              {this.props.cart.length > 0 ? this.props.cart.length : 0}
            </Text>
            <Button transparent onPress={() => this.props.navigation("Cart")}>
              <Icon
                style={styles.iconStyle}
                type="FontAwesome5"
                name="shopping-cart"
              />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

//read
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(HeaderLanding);
