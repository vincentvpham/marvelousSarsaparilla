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
  }

  getInput = (category, event) => {
    var formInputs = {};
    if (category === 'submit') {
      // Send the pakt info from the form to the container
      // Later we will add some validation here prior to submit
      this.state.formInputs.isRepeating =  this.state.isRepeating;
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
           <Text>Repeating:</Text> 
           <Text onPress={()=>this.setState({isRepeating: true})}>YES</Text> 
           <Text onPress={()=>this.setState({isRepeating: false})}>NO</Text> 
           {(this.state.isRepeating === null) ? null :  <PaktDateForm  getInput= {this.getInput.bind(this)} isRepeating= {this.state.isRepeating}/>}
           <TouchableHighlight style={styles.button} onPress={this.getInput.bind(this, 'submit')} ><Text>Submit</Text></TouchableHighlight>
      </View>
    );
  }
}

// Display different options depending on if the pakt is repeating
class PaktDateForm extends React.Component {
     render() {
        const {getInput, isRepeating} = this.props;
        if(isRepeating === true){
          var dateInfo = <RepeatingEventForm getInput={getInput}/> ;
        } else if(isRepeating === false){
          var dateInfo = <NonRepeatingEventForm getInput={getInput}/> ;
        } 
       return dateInfo;
     }
}

class RepeatingEventForm extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View >
          <Text>REPEATING EVENT </Text>
          <Text>Times Per Week </Text>
          <TextInput
            style={styles.TextInput}
            onChange={this.props.getInput.bind(this, 'frequency')}
           />
          <Text># of Weeks </Text>
          <TextInput
            style={styles.TextInput}
            onChange={this.props.getInput.bind(this, 'timeFrame')}
           />
        </View>
    );
  }
}

class NonRepeatingEventForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { date: new Date() };
    this.props.getInput('endDate', this.state.date)
  }

  onDateChange = (date) => {
    this.setState({date: date});
    this.props.getInput('endDate', this.state.date)
  }

  render() {
    return (
      <View >
       <Text>Non-REPEATING EVENT </Text>
       <DatePickerIOS
           date={this.state.date}
           mode="date"
           onDateChange={this.onDateChange}
         />
        </View>
    );
  }
}

module.exports = CreatePaktForm;