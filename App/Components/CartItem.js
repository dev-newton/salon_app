import React, { Component } from "react";
import { View, Image } from "react-native";
import { Content, Text, SwipeRow, Button, Icon } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import styles from "./Styles/CartItemStyles";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartActions from "../Redux/CartRedux";

class CartItem extends Component {
  static propTypes = {
    setItemcountup: PropTypes.func,
    setItemcountdown: PropTypes.func,
    setRemoveitem: PropTypes.func
  };

  render() {
    return (
      <View style={styles.ItemContainer}>
        <SwipeListView
          data={this.props.title}
          renderItem={(data, i) => (
            <View key={i} style={styles.BodyContainer}>
              <Image style={styles.ItemImage} source={this.props.image} />
              <View style={styles.ItemTextContainer}>
                <Text style={styles.ItemTitle}>
                  {this.props.title} &nbsp;({this.props.name})
                </Text>
                <Text style={styles.ItemPrice}> $ {this.props.price}</Text>
              </View>
              <View style={styles.ItemCounterContainer}>
                <Button
                  transparent
                  onPress={() => this.props.setItemcountup(this.props.itemKey)}
                >
                  <Icon name="arrow-dropup" style={styles.ItemCountUp} />
                </Button>
                <Text style={styles.ItemCountText}>{this.props.count}</Text>
                <Button
                  transparent
                  onPress={() =>
                    this.props.setItemcountdown(this.props.itemKey)
                  }
                >
                  <Icon name="arrow-dropdown" style={styles.ItemCountDown} />
                </Button>
              </View>
            </View>
          )}
          renderHiddenItem={(data, i) => (
            <View key={i} style={styles.rowBack}>
              <Text>Left</Text>
              <Button
                style={styles.Button}
                danger
                onPress={() => this.props.setRemoveitem(this.props.itemKey)}
              >
                <Icon active name="trash" />
              </Button>
            </View>
          )}
          disableRightSwipe
          rightOpenValue={-100}
        />
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
    setItemcountup: itemKey => dispatch(CartActions.changeItemcountup(itemKey)),
    setItemcountdown: itemKey =>
      dispatch(CartActions.changeItemcountdown(itemKey)),
    setRemoveitem: itemKey => dispatch(CartActions.changeRemoveitem(itemKey))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
