import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { Container, Content, Text, Button, Icon } from "native-base";

import styles from "./Styles/ServiceDetailsStyles";

import HeaderService from "../Components/HeaderService";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartActions from "../Redux/CartRedux";

class ServiceDetails extends Component {
  static propTypes = {
    setCart: PropTypes.func
  };
  render() {
    return (
      <Container>
        <HeaderService navigation={this.props.navigation} />
        <ImageBackground
          source={require("../Images/salon4.jpg")}
          style={styles.BackgroundImage}
        />

        <Content style={styles.ServiceContent}>
          <View style={styles.NameAndPrice}>
            <View style={styles.Name}>
              <Text style={styles.NameText}>
                <Text style={styles.TitleText}>
                  {" "}
                  {this.props.navigation.getParam("title", "Error")}
                  &nbsp;&nbsp;&nbsp;
                </Text>
                {this.props.navigation.getParam("name", "Error")}
              </Text>
            </View>
            <View style={styles.Price}>
              <Text style={styles.PriceText}>
                {" "}
                ${this.props.navigation.getParam("price", "Error")}
              </Text>
            </View>
          </View>

          <Button
            iconLeft
            dark
            onPress={() => {
              this.props.setCart({
                itemTitle: this.props.navigation.getParam("title", "Error"),
                itemName: this.props.navigation.getParam("name", "Error"),
                itemPrice: this.props.navigation.getParam("price", "Error"),
                itemCount: 1,
                itemImage: this.props.navigation.getParam("image", "Null"),
                itemExtras: null
              });
              alert("Added to Cart!");
            }}
            style={styles.AddButton}
          >
            <Text style={styles.AddText}>Add</Text>
            <Icon
              type="MaterialCommunityIcons"
              name="plus"
              style={styles.AddIcon}
            />
          </Button>
        </Content>
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
    setCart: cart => dispatch(CartActions.changeCart(cart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceDetails);
