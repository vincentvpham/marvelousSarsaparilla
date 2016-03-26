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

var _ = require('lodash');
import PaktFriendsForm from './CreatePaktFriendsForm';
import PaktDateForm from './CreatePaktDateForm';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 95,
  },
  TextInput: {
    height: 20, 
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 7,
    borderRadius : 2,
    height: 20, 
    width: 50,
  },
});


class CreatePaktForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
    //load info for the user's friends
    this.props.listTheFriends();
  }

  getInput = (category, event) => {
    if (category === 'submit') {
      // add friends who were invited to
      let users = _.filter(this.props.friends,  ['invited', true]).map(function(friend){return friend.id});
      this.state.users =  users;
      // send info to the database
      this.props.submitFormInputs(this.state);
      //reset the form to empty
      this.state = {};

    } else { // If the input is a TextInput, grab the text from the change event
      if(event.nativeEvent){
        this.state[category] = event.nativeEvent.text.trim(); 
      } else{ // If not, input the given value
        this.state[category] = event;
      }
    }
  }

  render() {
    let { friends } = this.props;    
    return (
      <View style={styles.container}>
        <Text>Name:</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name||''}
        />
         <Text>Description:</Text>
         <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.setState({description: text})}
            value={this.state.description||''}
          />
          <Text>Conseqence:</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.setState({consequenceText: text})}
            value={this.state.consequenceText||''}
           />
           <Text>Friends:</Text>
           <PaktFriendsForm friends={friends} />
           <Text>Repeating:</Text> 
           <Text onPress={()=>this.setState({repeating: true})}>YES</Text> 
           <Text onPress={()=>this.setState({repeating: false})}>NO</Text> 
           {(this.state.repeating === undefined) ? null :  <PaktDateForm  getInput= {this.getInput.bind(this)} repeating= {this.state.repeating}/>}
           <TouchableHighlight style={styles.button} onPress={this.getInput.bind(this, 'submit')} ><Text>Submit</Text></TouchableHighlight>
      </View>
    );
  }
}

module.exports = CreatePaktForm;