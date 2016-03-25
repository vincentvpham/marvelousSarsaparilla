import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  pictureContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class PaktPics extends Component {
  constructor(props) {
    super(props);
  }

  renderPicsView() {
    const { paktPictures } = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(paktPictures);

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/pakt-test/' + rowData.path}}
                                     style={{width: 350, height: 200}} /> }
        />
      </View>
    );
  }

  render() {
    return this.renderPicsView();
  }

}

const IndividualPakt = ({ currentPakt, respondtoInvite, accepted, currentUserId, paktPictures }) => (
  <View style={styles.container}>
    <ScrollView
      ref={(scrollView) => { _scrollView = scrollView; }}
      automaticallyAdjustContentInsets={false}
      onScroll={() => { console.log('onScroll!'); }}
      scrollEventThrottle={200}
    >
        <Text>{currentPakt.name}</Text>
        <Text>{currentPakt.description}</Text>
      <View>
        {(accepted) ? <PaktPics paktPictures={paktPictures} /> :
          <View>
            <TouchableHighlight onPress={() => respondtoInvite(true, currentUserId, currentPakt.id)}><Text>Accept</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert(
              'Are you sure you want to decline this Pakt',
              null,
              [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => respondtoInvite(false, currentUserId, currentPakt.id) },
              ]
            )
            }><Text>Decline</Text></TouchableHighlight>
          </View>
          }
      </View>
    </ScrollView>
  </View>
);

export default IndividualPakt;
