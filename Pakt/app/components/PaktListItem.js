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

export default class PaktListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: pakt.posters.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{pakt.title}</Text>
          <Text style={styles.description}>{pakt.description}</Text>
        </View>
      </View>
    );
  }
}

// Styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default PaktListItem;
