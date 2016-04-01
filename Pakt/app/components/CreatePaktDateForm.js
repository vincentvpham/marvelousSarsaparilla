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
  MKIconToggle,
  mdl,
  setTheme,
} from 'react-native-material-kit';

var styles = StyleSheet.create({
  TextInput: {
    height: 20, 
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Display different options depending on if the pakt is repeating
class PaktDateForm extends React.Component {
  render(){
    const {getInput, repeating} = this.props;
    return (repeating) ? <RepeatingEventForm getInput={getInput}/> : <NonRepeatingEventForm getInput={getInput}/>;
  }
}

class RepeatingEventForm extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <View >
          <MKTextField
            tintColor={'#A9A9A9'}
            textInputStyle={{ color: '#000' }}
            placeholder="Times Per Week"
            style={styles.textfield}
            highlightColor={'#00A79D'}
            onChange={this.props.getInput.bind(this, 'frequency')} />
          <MKTextField
            tintColor={'#A9A9A9'}
            textInputStyle={{ color: '#000' }}
            placeholder="# of Weeks"
            style={styles.textfield}
            highlightColor={'#00A79D'}
            onChange={this.props.getInput.bind(this, 'timeFrame')} />
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
      <View style={styles.datePicker}>
       <DatePickerIOS 
           date={this.state.date}
           style = {styles.DatePickerIOS}
           mode="date"
           onDateChange={this.onDateChange}
         />
      </View>
    );
  }
}

module.exports = PaktDateForm;