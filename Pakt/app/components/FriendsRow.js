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

const defaultStyles = StyleSheet.create({
  friend: {
    margin: 10,
  },
  image: {
    width: 40, 
    height: 40, 
    borderRadius:20, 
    borderWidth: 1, 
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
});

const paktListFriendStyles = StyleSheet.create({
  friend: {
    margin: 1,
  },
  image: {
    width: 40, 
    height: 40, 
    borderRadius:20, 
    borderWidth: 1, 
  },
});

class FriendsRow extends React.Component {
  constructor(props) {
    super(props); 
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // Copy the friends, and display just their first name
    let friendsList = this.props.friends.slice();
    friendsList.forEach(function(x){
      x.name = x.name.split(' ')[0];
    });
    this.state = {};
    this.state.dataSource =  ds.cloneWithRows(this.props.friends);
  }

  toggleFriendSelect = (rowData) => {
    const { friends, numAllowedClicks } = this.props;
    if( numAllowedClicks!== 0){ //if user may select a friend
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      if (numAllowedClicks === 1) { //if only one selected friend allowed, de-select other friends
        friends.forEach(function(x){
          if(x.selected === true){
            x.selected = false;
          }
        }); 
        // Update the selected user in the redux state
        const {setSelectedUser} = this.props;
        setSelectedUser(rowData.id);
      }
      rowData.selected = !(rowData.selected);
      this.setState({ dataSource: ds.cloneWithRows(friends) });
    }
  }

  //component for displaying friends and highlighting selected friends
  _renderRow (rowData) {
    // change styles if we are looking at the paktList
    const { inPaktList } = this.props;
    let styles = defaultStyles; 

    if ( inPaktList === true ) {
      styles  = paktListFriendStyles; 
    } else {
      styles = defaultStyles; 

    }
    return (
      <View>
        <TouchableHighlight underlayColor='white' onPress = {()=>{this.toggleFriendSelect(rowData);  this.forceUpdate()}} style={styles.friend}>
          <Image source={{uri: rowData.picture}} style={styles.image}/>
        </TouchableHighlight>
        { inPaktList ? null : <Text style={{color: (rowData.selected) ? 'blue' :'black'}}>{rowData.name}</Text> }
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.title ? <Text style={defaultStyles.subtitle}>{this.props.title }</Text> : null}
        <ListView
          horizontal ='true'
          dataSource={this.state.dataSource}
          renderRow={(rowData)=> this._renderRow( rowData )}
           />
      </View>
    );
  }
};

module.exports = FriendsRow;