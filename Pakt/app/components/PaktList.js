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

export default class PaktList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listThePakts();
  }

  render() {
    const { isFetching } = this.props;
    return (isFetching) ? this.renderLoadingView() : this.renderPaktsView()
  }

  renderPaktsView() {
    const { pakts } = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(pakts);

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderPakt}
          style={styles.listView} />
      </View>
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

export default PaktList;
