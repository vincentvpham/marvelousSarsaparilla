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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const IndividualPakt = ({ currentPakt }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text>{currentPakt.name}</Text>
      <Text>{currentPakt.description}</Text>
    </View>
  </View>
);

export default IndividualPakt;