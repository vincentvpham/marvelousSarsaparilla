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

import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  MKTextField,
  setTheme,
} from 'react-native-material-kit';

var _ = require('lodash');
import PaktFriendsForm from './CreatePaktFriendsForm';
import PaktDateForm from './CreatePaktDateForm';


var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 60,
    paddingLeft: 90,
  },
  TextInput: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 7,
    borderRadius: 2,
    height: 20, 
    width: 50,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
  heading: {
    marginTop: 15,
    fontSize: 22,
    justifyContent:'center',
  },
});


class CreatePaktForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
    //load info for the user's friends
    this.props.listTheFriends();
  }

  getInput() {
    console.log('--------------> inside get Input', this.state);
      // add friends who were invited to
      let users = _.filter(this.props.friends,
        ['selected', true]).map(function(friend){return friend.id}); 
      this.state.users = users;
      // send info to the database
      this.props.submitFormInputs(this.state);
      //reset the form to empty
      this.state = {};
      //clear selected users
      this.props.friends.forEach(function(x){x.selected = false});
  }

  validate() {
    // console.log("%$%$%$%$%@@##@@", this.state)
    // if(!this.state.name || !this.state.description) {
    //   console.log("&&&&&&&&&&&&&&&&&&&&&& SUBMIT AGAIN!");
    // } else {
      this.getInput.bind(this)
    // }
  }

  render() {
    let { friends } = this.props;    
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>CREATE A PAKT</Text>
        {/* <Text style={styles.subtitle}>Name:</Text> 
        <TextInput 
        //   style={styles.TextInput}
        //   onChangeText={(text) => this.setState({name: text})}
        //   value={this.state.name||''}
        // /> */}
        <MKTextField
          tintColor={MKColor.Lime}
          textInputStyle={{color: MKColor.Orange}}
          placeholder="Name..."
          style={styles.textfield}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name||''}
        />
        <MKTextField
          tintColor={MKColor.Lime}
          textInputStyle={{color: MKColor.Orange}}
          placeholder="Description..."
          style={styles.textfield}
          onChangeText={(text) => this.setState({description: text})}
          value={this.state.description||''}
        />
        <MKTextField
          tintColor={MKColor.Lime}
          textInputStyle={{color: MKColor.Orange}}
          placeholder="Consequence..."
          style={styles.textfield}
          onChangeText={(text) => this.setState({consequenceText: text})}
          value={this.state.consequenceText||''}
        />
           <Text style={styles.subtitle}>Friends:</Text>
           <PaktFriendsForm friends={friends} />
           <Text style={styles.subtitle}>Repeating:</Text> 
           <Text onPress={()=>this.setState({repeating: true})}>YES</Text> 
           <Text onPress={()=>this.setState({repeating: false})}>NO</Text> 
           {(this.state.repeating === undefined) ? null :  <PaktDateForm  getInput= {this.getInput.bind(this)} repeating= {this.state.repeating}/>}
           <TouchableHighlight style={styles.button} onPress={this.getInput.bind(this)} ><Text>Submit</Text></TouchableHighlight>
      </View>
    );
  }
}

module.exports = CreatePaktForm;