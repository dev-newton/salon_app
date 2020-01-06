import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content } from "native-base";
import styles from "./Styles/ServiceScreenStyles";
import HeaderService from "../Components/HeaderService";
import ServiceItem from "../Components/ServiceItem";

export default class ServiceScreen extends Component {
  componentWillMount() {
    const { navigation } = this.props;
    title = navigation.getParam("title", "");
    serviceImages = navigation.getParam("serviceImages", "");
    serviceTitles = navigation.getParam("serviceTitles", "");
    prices = navigation.getParam("prices", "");
    serviceDescriptions = navigation.getParam("serviceDescriptions", "");
    serviceSize = navigation.getParam("serviceSize", "");
  }

  render() {
    const serviceItems = [];

    for (let i = 0; i < serviceSize; i++) {
      serviceItems.push(
        <View key={i}>
          <ServiceItem
            navigation={this.props.navigation}
            price={prices[i]}
            title={title}
            serviceImage={serviceImages[i]}
            serviceTitle={serviceTitles[i]}
            serviceDescription={serviceDescriptions[i]}
          />
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#f4f4f4" }}>
        <HeaderService navigation={this.props.navigation} />
        <Content style={styles.titleTextContent}>
          <Text style={styles.titleText}>{title}</Text>

          {serviceItems}
        </Content>
      </Container>
    );
  }
}
