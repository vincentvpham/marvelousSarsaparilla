import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TextInput,
  DatePickerIOS,
  TouchableHighlight,
} from 'react-native';
import Loading from './Loading';
import FriendsRow from './FriendsRow';

const styles = StyleSheet.create({
  friend: {
    margin: 5,
  },
});

//display a different data depending on if the user's friends are loading, not loading, or don't exist
class PaktFriendsForm extends React.Component {
  render(){
    const { friends } = this.props;
    var displayText = 'Loading Friends...';
    if(Array.isArray(friends) && friends.length === 0){
      var displayText = 'You have no friends who use pakt!';
    } 
    return (!friends || friends.length===0) ? <Loading displayText = {displayText}/> : <FriendsRow friends={friends} numAllowedClicks={'many'}/>;
  }
}

module.exports = PaktFriendsForm;