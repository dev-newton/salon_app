import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import ServiceScreen from "../Containers/ServiceScreen";
import Cart from "../Containers/Cart";
import ServiceDetails from "../Containers/ServiceDetails";
import Checkout from "../Containers/Checkout";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    ServiceScreen: { screen: ServiceScreen },
    Cart: { screen: Cart },
    ServiceDetails: { screen: ServiceDetails },
    Checkout: { screen: Checkout }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
