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
    return (!friends || friends.length===0) ? <Loading displayText = {displayText}/> : <SelectFriendsView friends={friends}/>;
  }
}

class SelectFriendsView extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    const {friends} = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });      
    dataSource = dataSource.cloneWithRows(friends);
    return (
      <View>
        <ListView
          horizontal ='true'
          dataSource={dataSource}
          renderRow={(rowData) => <TabIcon rowData = {rowData} selected = {!rowData.invited} name = {rowData.name}></TabIcon>}
           />
      </View>
    );
  }
};

// component for displaying friends and highlighting invited friends
class TabIcon extends React.Component {
  toggleFriendInvite = (friend) => {
    console.log('REGISTERING THIS PRESS?');
    friend.invited = !(friend.invited);
    this.forceUpdate()
  }
    render(){
        return (
          <View>
            <TouchableHighlight onPress = {()=>this.toggleFriendInvite(this.props.rowData)} style={styles.friend}>
              <Image source={{uri: this.props.rowData.picture}} style={{width: 36, height: 36, borderRadius:18, borderWidth: 1, borderborderColor: (this.props.rowData.invited) ? 'blue' :'green'}}  />
            </TouchableHighlight>
              <Text style={{color: (this.props.rowData.invited) ? 'blue' :'black'}}>{this.props.name}</Text>
        </View>
        );
    }
}

module.exports = PaktFriendsForm;