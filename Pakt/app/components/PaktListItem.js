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
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
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
  const currentDay = new Date().getDay();
  const createdAtDay = new Date(pakt.createdAt).getDay();
  // Need to manually set daysLeft to 7 if current day is same as created day
  const daysLeft = (currentDay === createdAtDay) ? 7 : ((7 - currentDay + createdAtDay) % 7);
  const needsAttention = (pakt.frequency - pakt.Pakt_User.picsThisWeek) === daysLeft;

  let imgSrc = require('../assets/img/star.png');
  if (pakt.Pakt_User.win === true) {
    imgSrc = require('../assets/img/crown.png');
  } else if (pakt.Pakt_User.win === false) {
    imgSrc = require('../assets/img/rain.png');
  } else if (needsAttention) {
    imgSrc = require('../assets/img/caution.png');
  }

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
        <Image source={ imgSrc }
          style={{width: 50, height: 50}} />
      </View>
    </View>
  );
};

export default PaktListItem;
