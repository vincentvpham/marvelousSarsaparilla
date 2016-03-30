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
    borderRadius : 2,
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

  getInput = (category, event) => {
    if (category === 'submit') {
      // add friends who were invited to
      let users = _.filter(this.props.friends,  ['selected', true]).map(function(friend){return friend.id}); 
      this.state.users =  users;
      // send info to the database
      this.props.submitFormInputs(this.state);
      //reset the form to empty
      this.state = {};
      //clear selected users
      this.props.friends.forEach(function(x){x.selected = false});

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
        <Text style={styles.heading}>CREATE A PAKT</Text>
        <Text style={styles.subtitle}>Name:</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name||''}
        />
         <Text style={styles.subtitle}>Description:</Text>
         <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.setState({description: text})}
            value={this.state.description||''}
          />
          <Text style={styles.subtitle}>Conseqence:</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => this.setState({consequenceText: text})}
            value={this.state.consequenceText||''}
           />
           <Text style={styles.subtitle}>Friends:</Text>
           <PaktFriendsForm friends={friends} />
           <Text style={styles.subtitle}>Repeating:</Text> 
           <Text onPress={()=>this.setState({repeating: true})}>YES</Text> 
           <Text onPress={()=>this.setState({repeating: false})}>NO</Text> 
           {(this.state.repeating === undefined) ? null :  <PaktDateForm  getInput= {this.getInput.bind(this)} repeating= {this.state.repeating}/>}
           <TouchableHighlight style={styles.button} onPress={this.getInput.bind(this, 'submit')} ><Text>Submit</Text></TouchableHighlight>
      </View>
    );
  }
}

module.exports = CreatePaktForm;