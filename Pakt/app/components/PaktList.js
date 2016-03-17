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
  centerText: {
    marginTop: 200,
  },
});

const PaktList = ({ onClick, completed, text }) => (
  <View style = {styles.centerText}>
    <Text> this is the pakt list</Text>
  </View>
)

export default PaktList
