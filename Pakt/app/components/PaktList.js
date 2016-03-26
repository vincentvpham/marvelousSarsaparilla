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

import PaktListItem from './PaktListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  subtitle: {
    fontSize: 30,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class PaktList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listThePakts(this.props.currentUserId);
  }

  renderPaktsView() {
    const { pakts, onPaktClick } = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(pakts);

    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Your Pakts</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <PaktListItem pakt={rowData} onPaktClick={onPaktClick} />}
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

  render() {
    const { isFetching } = this.props;
    return (isFetching) ? this.renderLoadingView() : this.renderPaktsView();
  }

}

export default PaktList;
