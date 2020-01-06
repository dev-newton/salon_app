import React, { Component } from "react";
import { Text, Platform } from "react-native";
import { Container, List, ListItem, Body, Left, Icon } from "native-base";

export default class Sidebar extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: "white",
          paddingTop: Platform.OS === "ios" ? 40 : 0
        }}
      >
        <List>
          <ListItem itemDivider>
            <Text>Services</Text>
          </ListItem>
          <ListItem button onPress={this.props.goToMakeUp}>
            <Left>
              <Icon
                type="Foundation"
                name="torso-female"
                style={{
                  fontSize: 22
                }}
              />
            </Left>
            <Body>
              <Text>Make Up </Text>
            </Body>
          </ListItem>
          <ListItem button onPress={this.props.goToManicure}>
            <Left>
              <Icon
                type="Ionicons"
                name="md-hand"
                style={{
                  fontSize: 22,
                  width: 30
                }}
              />
            </Left>
            <Body>
              <Text>Manicure</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={this.props.goToBrushes}>
            <Left>
              <Icon
                type="MaterialIcons"
                name="brush"
                style={{
                  fontSize: 22,
                  width: 30
                }}
              />
            </Left>
            <Body>
              <Text>Brushes & Lashes</Text>
            </Body>
          </ListItem>
        </List>
        <ListItem itemDivider>
          <Text>Orders</Text>
        </ListItem>
        <ListItem button onPress={this.props.goToCart}>
          <Left>
            <Icon
              type="Foundation"
              name="shopping-cart"
              style={{
                fontSize: 22,
                width: 30
              }}
            />
          </Left>
          <Body>
            <Text>Cart</Text>
          </Body>
        </ListItem>
      </Container>
    );
  }
}
