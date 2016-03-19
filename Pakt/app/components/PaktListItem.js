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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

const PaktListItem = ({ pakt, onPaktClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Text onPress={() => onPaktClick(pakt.id)} style={styles.name}>{pakt.name}</Text>
        <Text style={styles.description}>{pakt.description}</Text>
      </View>
    </View>
  );
};

export default PaktListItem;
