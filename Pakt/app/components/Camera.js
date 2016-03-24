import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Modal,
  ListView,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import RNCamera from 'react-native-camera';

import PaktListItem from './PaktListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, transparent: true, animated: true };
  }

  takePicture() {
    this.camera.capture()
    .then((picture) => {
      this.props.sendPictureToS3(picture);
    })
    .catch(err => console.error(err));
  }

  setModalVisible(visible) {
    this.setState({visible: visible});
    console.log(this.props);
  }



  render() {

    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    dataSource = dataSource.cloneWithRows(this.props.pakts);

    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={RNCamera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.setModalVisible.bind(this, true)}>[CAPTURE]</Text>
        </RNCamera>
        <Modal
          animated={this.state.animated}
          transparent={this.state.transparent}
          visible={this.state.visible}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text onPress={this.setModalVisible.bind(this, false)}>
                Back
              </Text>
              <ListView
                dataSource={dataSource}
                renderRow={(rowData) => <PaktListItem pakt={rowData} onPaktClick={this.takePicture.bind(this)}/>}
                style={styles.listView} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

module.exports = Camera;
