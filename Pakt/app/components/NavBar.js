import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';

const NavBar = ({ onNavPress }) => (
  <View>
    <Text onPress={() => onNavPress('Pakts')}>Pakts</Text>
    <Text onPress={() => onNavPress('Camera')}>Camera</Text>
    <Text onPress={() => onNavPress('Create')}>Create</Text>
  </View>
);

NavBar.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NavBar;
