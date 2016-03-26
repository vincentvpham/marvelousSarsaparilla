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
    height: 70,
  },
  textContainer: {
    flex: 0.4,
  },
  friendsContainer: {
    flex: 0.4,
  },
  iconContainer: {
    flex: 0.2,
  },
  name: {
    fontSize: 18,
    marginBottom: 2,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

const PaktListItem = ({ pakt, onPaktClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text onPress={() => onPaktClick(pakt)} style={styles.name}>{pakt.name}</Text>
        <Text style={styles.description}>{pakt.description}</Text>
      </View>
      <View style={styles.friendsContainer}>
        <Text>Friendssssssssssss</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{width: 50, height: 50}} />
      </View>
    </View>
  );
};

export default PaktListItem;
