import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Mocked Data
// var MOCKED_DATA = [
//   {title: 'Gym', description: 'Go to gym three times a week', posters: {thumbnail: ''}},
//   {title: 'Dance', description: 'Dance 2 times a week', posters: {thumbnail: ''}},
//   {title: 'Go out :)', description: 'Stay out past midnight tonight', posters: {thumbnail: ''}},
// ];

// Class
class PaktListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://127.0.0.1:3000/api/pakts/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.text())
    .then((responseText) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(JSON.parse(responseText)),
        loaded: true,
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPakt}
        style={styles.listView} />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Pakts...
        </Text>
      </View>
    );
  }

  renderPakt(pakt) {
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

module.exports = PaktListView;
