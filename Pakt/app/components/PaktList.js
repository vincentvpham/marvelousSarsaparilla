import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';

const styles = StyleSheet.create({
  centerText: {
    marginTop: 200,
  },
});

class PaktList extends Component {
  componentDidMount() {
    this.props.listThePakts();
  }

  render() {
    return (
      <View style = {styles.centerText}>
        <Text> this is the pakt list</Text>
      </View>
    );
  }
}

export default PaktList;
