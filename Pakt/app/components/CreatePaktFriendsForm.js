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

//display a different data depending on if the user's friends are loading, not loading, or don't exist
class PaktFriendsForm extends React.Component {
  render(){
    const { friends } = this.props;
    var displayText = 'Loading Friends...';
    if(Array.isArray(friends) && friends.length === 0){
      var displayText = 'You have no friends who use pakt!';
    } 
    return (!friends || friends.length===0) ? <LoadingFriendsView displayText = {displayText}/> : <SelectFriendsView friends={friends}/>;
  }
}

const LoadingFriendsView = ({displayText}) => (
    <Text>
      {displayText} 
    </Text>
);

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
          dataSource={dataSource}
          renderRow={(rowData) => <TabIcon rowData = {rowData} selected = {!rowData.invited} title = {rowData.name}></TabIcon>}
           />
      </View>
    );
  }
};

// component for displaying friends and highlighting invited friends
class TabIcon extends React.Component {
  toggleFriendInvite = (friend) => {
    friend.invited = !(friend.invited);
    this.forceUpdate()
  }
    render(){
        return (
            <Text onPress = {()=>this.toggleFriendInvite(this.props.rowData)} style={{color: (this.props.rowData.invited) ? 'blue' :'black'}}>{this.props.title}</Text>
        );
    }
}

module.exports = PaktFriendsForm;