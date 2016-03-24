import { connect } from 'react-redux';
import { submitPicture } from '../actions';
import Camera from '../components/Camera';
import { Actions } from 'react-native-router-flux';

// dependencies for uploading to S3
const s3Policy = require('../utils/s3_policy');
const env = require('../utils/env');

const mapStateToProps = (state) => {
  return {
    pakts: state.pakts.items,
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendPictureToS3: (picture) => {

      // prep to send picture to S3
      // S3 configuration to create S3 policy
      const s3Config = {
        bucket: 'pakt-test',
        region: env.region,
        key: env.accessKeyId,
        secret: env.secretAccessKey,
        type: 'image/',
        path: 'pakt-id/user-id/',
        acl: 'public-read-write',
        expires: new Date(Date.now() + 30000), // expires in 30 seconds
        length: 10485760, // 10M as maximal size
      };

      // create amazon S3 policy with s3Config
      const policy = s3Policy(s3Config);

      const file = [{
        name: 'file',
        filename: picture,
        filepath: picture,
        filetype: 'image/jpg',
      }];

      const pictureForS3 = {
        url: `https://${s3Config.bucket}.s3.amazonaws.com/`,
        files: file,
        params: {
          key: 'pakt-id/user-id/${filename}',
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

      dispatch(submitPicture(pictureForS3));
    },


  };
};

const SendPicture = connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera);

export default SendPicture;
