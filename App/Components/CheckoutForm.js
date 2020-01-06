import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import { Form, Icon, Item, Textarea, Button } from "native-base";

// Styles
import styles from "./Styles/CheckoutFormStyles";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartActions from "../Redux/CartRedux";

class CheckoutForm extends Component {
  static propTypes = {
    setClearcart: PropTypes.func
  };

  state = {
    name: "",
    address: "",
    phone: "",
    note: "",
    price: this.props.totalPrice,
    cart: this.props.cart
  };

  submit = () => {
    if (this.state.name != "" && this.state.address && this.state.phone) {
      //Write ll stuff to database
      alert("Order Successful");
      this.props.setClearcart(this.state.cart);
      this.props.navigation.navigate("LaunchScreen");
    } else {
      alert("Please fill in all the required info!");
    }
  };

  render() {
    return (
      <View style={styles.FormContainer}>
        <Item>
          <Icon style={styles.FormIcon} active name="person" />
          <TextInput
            style={styles.FormText}
            placeholder="Name *"
            value={this.state.name}
            onChange={e => this.setState({ name: e.nativeEvent.text })}
          />
        </Item>
        <Item>
          <Icon style={styles.FormIcon} active name="home" />
          <TextInput
            style={styles.FormText}
            placeholder="Address *"
            value={this.state.address}
            onChange={e => this.setState({ address: e.nativeEvent.text })}
          />
        </Item>
        <Item>
          <Icon style={styles.FormIcon} active name="call" />
          <TextInput
            style={styles.FormText}
            placeholder="Phone *"
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.nativeEvent.text })}
          />
        </Item>
        <Form style={styles.TextAreaContainer}>
          <Textarea
            style={styles.TextArea}
            rowSpan={4}
            bordered
            placeholder="Note (ex. 'Red house, floor 5')"
            value={this.state.note}
            onChange={e => this.setState({ note: e.nativeEvent.text })}
          ></Textarea>
        </Form>
        <Button block style={styles.SubmitButton} onPress={() => this.submit()}>
          <Text style={styles.SubmitText} uppercase={false}>
            Place Order
          </Text>
        </Button>
      </View>
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
    setClearcart: cart => dispatch(CartActions.changeClearcart(cart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutForm);
