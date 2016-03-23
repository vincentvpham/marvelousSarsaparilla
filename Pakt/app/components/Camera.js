import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import RNCamera from 'react-native-camera';


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
  takePicture() {
    this.camera.capture()
    .then((picture) => {
      this.props.sendPictureToS3(picture);
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={RNCamera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </RNCamera>
      </View>
    );
  }

}

module.exports = Camera;
