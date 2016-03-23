import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RNCamera from 'react-native-camera';

// dependencies for uploading to S3
const RNUploader = require('NativeModules').RNUploader;
const xml2json = require('node-xml2json');
const s3Policy = require('../utils/s3_policy');
const env = require('../utils/env');

// S3 configuration to create policy per Amazon
const s3Config = {
  bucket: 'pakt-test',
  region: env.region,
  key: env.accessKeyId,
  secret: env.secretAccessKey,
  type: 'image/',
  path: 'images/',
  acl: 'public-read-write',
  expires: new Date(Date.now() + 60000),
  length: 10485760, // 10M as maximal size
};

// create amazon S3 policy with s3Config
const policy = s3Policy(s3Config);

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
    .then((data) => {
      const file = [{
        name: 'file',
        filename: data,
        filepath: data,
        filetype: 'image/jpg',
      }];

      const opts = {
        url: `https://${s3Config.bucket}.s3.amazonaws.com/`,
        files: file,
        params: {
          key: 'images/${filename}',
          acl: s3Config.acl,
          'X-Amz-Signature': policy.signature,
          'x-amz-credential': policy.credential,
          'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
          'X-Amz-Date': `${policy.date}T000000Z`,
          'Content-Type': 'image/jpg',
          policy: policy.policy,
          success_action_status: '201',
          'x-amz-meta-uuid': '14365123651274',
        },
      };

      RNUploader.upload(opts, (err, res) => {
        if (err) {
          console.error(err);
          // this.setState({ uploading: false, uploadStatus: err });
          return;
        }

        const status = res.status;
        const jsonResponse = xml2json.parser(res.data);

        console.log(`upload complete with status ${status}`);
        console.log(jsonResponse);
        this.setState({ uploading: false, uploadStatus: status });
      });
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
