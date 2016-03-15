import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

var PaktView = require('./paktcomponent');

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene = {(route, navigator) => 
          <PaktView />
        }
      />
    );
  }
}
