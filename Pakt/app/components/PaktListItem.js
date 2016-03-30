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

import FriendsRow from './FriendsRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    height: 70,
  },
  textContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 0.1,
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

// To randomize friends that are displayed
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


const PaktListItem = ({ pakt, onPaktClick, currentUserId }) => {
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

  // For the friend pictures in each pakt in the list, we do not want to display the user's own photos
  let copyUsers =  pakt.Users.slice(); 
  copyUsers.forEach(function(elem, index){
    if(elem.id === currentUserId){
      copyUsers.splice(index, 1);
    }
  });
  //We also only want to show three random users
  let friends = shuffleArray(copyUsers).slice(0,3);


  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text onPress={() => onPaktClick(pakt)} style={styles.name}>{pakt.name}</Text>
        <Text style={styles.description}>{pakt.description}</Text>
      </View>
      <View style={styles.friendsContainer}>
        <FriendsRow inPaktList={true} numAllowedClicks={0} friends={friends}/>
      </View>
      <View style={styles.iconContainer}>
        <Image source={ imgSrc }
          style={{width: 50, height: 50}} />
      </View>
    </View>
  );
};

export default PaktListItem;
