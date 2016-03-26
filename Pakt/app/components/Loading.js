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


const Loading = ({ displayText = 'Loading Pakts...'}) => (
  <Text>
    { displayText } 
  </Text>
);


module.exports = Loading;
