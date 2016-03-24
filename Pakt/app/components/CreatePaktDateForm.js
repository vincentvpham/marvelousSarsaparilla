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
  TextInput: {
    height: 20, 
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1
  },
});

// Display different options depending on if the pakt is repeating
class PaktDateForm extends React.Component {
  render(){
    const {getInput, isRepeating} = this.props;
    return (isRepeating) ? <RepeatingEventForm getInput={getInput}/> : <NonRepeatingEventForm getInput={getInput}/>;
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

module.exports = PaktDateForm;