import React, { Component } from "react";
import { View } from "react-native";
import { Content, Text, Container, Button } from "native-base";
import HeaderService from "../Components/HeaderService";
import CartItem from "../Components/CartItem";

import styles from "./Styles/CartStyles";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartActions from "../Redux/CartRedux";

console.disableYellowBox = true;

class Cart extends Component {
  static propTypes = {
    setItemcountup: PropTypes.func,
    setItemcountdown: PropTypes.func,
    setRemoveItem: PropTypes.func
  };

  render() {
    let itemsArray = [];
    let totalPrice = 0;

    if (this.props.cart != undefined && this.props.cart != []) {
      for (let i = 0; i < this.props.cart.length; i++) {
        itemsArray.push(
          <CartItem
            key={i}
            itemKey={i}
            title={this.props.cart[i].itemTitle}
            image={this.props.cart[i].itemImage}
            price={this.props.cart[i].itemPrice}
            count={this.props.cart[i].itemCount}
            name={this.props.cart[i].itemName}
          />
        );
        totalPrice +=
          parseInt(this.props.cart[i].itemPrice) * this.props.cart[i].itemCount;
      }
    } else {
      itemsArray.push(
        <Text
          key={i}
          style={{
            textAlign: "center",
            marginTop: "50%",
            fontStyle: "italic"
          }}
        >
          The cart is empty
        </Text>
      );
    }

    return (
      <Container>
        <HeaderService navigation={this.props.navigation} />
        <View style={styles.ParentView}>
          <Content>{itemsArray}</Content>
          <View style={styles.FooterContainer}>
            <Text style={styles.FooterText}>Total: ${totalPrice}</Text>
            <Button
              onPress={() => this.props.navigation.navigate("Checkout")}
              style={{
                marginTop: 5,
                backgroundColor: "white",
                borderRadius: 20,
                width: 200,
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              <Text style={{ color: "#EF6464", fontWeight: "bold" }}>
                Proceed to Checkout
              </Text>
            </Button>
          </View>
        </View>
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

//write
const mapDispatchToProps = dispatch => {
  return {
    setItemcountup: itemKey => dispatch(CartActions.changeItemcountup(itemKey)),
    setItemcountdown: itemKey =>
      dispatch(CartActions.changeItemcountdown(itemKey)),
    setRemoveItem: itemKey => dispatch(CartActions.changeRemoveItem(itemKey))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
