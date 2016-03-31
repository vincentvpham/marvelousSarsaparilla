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
} from 'react-native';

const styles = StyleSheet.create({
  picContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  subheading: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
  pic: {
    width: 50,
    height: 50,
  },
  mainPic: {
    width: 200,
    height: 200,
  },
});

class ProgressPics extends Component {
  constructor(props) {
    super(props);
    this.state = { url: undefined, showImage: false };
  }

  setMainPic(url) {
    this.setState({ showImage: true, url });
  }

  componentWillReceiveProps() {
    this.setState({ url: undefined, showImage: false });
  }

  renderPicsView() {
    const { paktPictures, selectedUser, showImage} = this.props;
    const selectedUserPics = paktPictures.filter(function (x) {
      return x.UserId === selectedUser;
    });
    const pictures = selectedUserPics.map((pic) => {
      const url = 'https://s3-us-west-1.amazonaws.com/pakt-test/' + pic.path;
      return (
        <TouchableHighlight onPress={() => this.setMainPic(url)}>
          <Image source={{ uri: url }} style={styles.pic} />
        </TouchableHighlight>
      );
    });

    return (
      <View>
        {selectedUserPics.length > 0 ? <Text style={styles.subheading}>Progess:</Text> : null}
        <View style={styles.picContainer}>
          {pictures}
        </View>
        {(this.state.showImage) ? <Image source={{ uri: this.state.url }} style={styles.mainPic} /> : null}
      </View>
    );
  }

  render() {
    return this.renderPicsView();
  }

}

export default ProgressPics;
