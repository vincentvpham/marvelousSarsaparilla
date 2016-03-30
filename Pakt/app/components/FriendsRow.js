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
  subtitle: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
});

class FriendsRow extends React.Component {
  constructor(props) {
    super(props); 
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
        this.setState({dataSource: ds.cloneWithRows(friends)
        });
    }
  }

  //component for displaying friends and highlighting selected friends
  _renderRow (rowData) {
      return (
      <View>
        <TouchableHighlight underlayColor='white' onPress = {()=>{this.toggleFriendSelect(rowData);  this.forceUpdate()}} style={styles.friend}>
          <Image source={{uri: rowData.picture}} style={{width: 36, height: 36, borderRadius:18, borderWidth: 1, borderColor: (rowData.selected) ? 'blue' :'black'}}  />
        </TouchableHighlight>
          <Text style={{color: (rowData.selected) ? 'blue' :'black'}}>{rowData.name}</Text>
    </View>
    );
  }

  render() {
    return (
      <View>
      {this.props.title ? <Text style={styles.subtitle}>{this.props.title }</Text> : null}
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