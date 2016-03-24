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
    this.state = {formInputs: {}, isRepeating: null};
    //load info for the user's friends
    this.props.listTheFriends();
  }

  getInput = (category, event) => {
    var formInputs = {};
    if (category === 'submit') {
      //get repeating property from the state
      this.state.formInputs.repeating =  this.state.isRepeating;

      // add friends who were invited to formInputs
      let users = _.filter(this.props.friends,  ['invited', true]).map(function(friend){return friend.id});
      this.state.formInputs.users =  users;

      // Later we will add some validation here prior to submit
      this.props.submitFormInputs(this.state.formInputs);

    } else { // If the input is a TextInput, grab the text from the change event
      if(event.nativeEvent){
        this.state.formInputs[category] = event.nativeEvent.text.trim(); 
      } else{ // If not, input the given value
        this.state.formInputs[category] = event;
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
          onChange={this.getInput.bind(this, 'name')}
        />
         <Text>Description:</Text>
         <TextInput
            style={styles.TextInput}
            onChange={this.getInput.bind(this, 'description')}
          />
          <Text>Conseqence:</Text>
          <TextInput
            style={styles.TextInput}
            onChange={this.getInput.bind(this, 'consequenceText')}
           />
           <Text>Friends:</Text>
           <PaktFriendsForm friends={friends} />
           <Text>Repeating:</Text> 
           <Text onPress={()=>this.setState({isRepeating: true})}>YES</Text> 
           <Text onPress={()=>this.setState({isRepeating: false})}>NO</Text> 
           {(this.state.isRepeating === null) ? null :  <PaktDateForm  getInput= {this.getInput.bind(this)} isRepeating= {this.state.isRepeating}/>}
           <TouchableHighlight style={styles.button} onPress={this.getInput.bind(this, 'submit')} ><Text>Submit</Text></TouchableHighlight>
      </View>
    );
  }
}

module.exports = CreatePaktForm;