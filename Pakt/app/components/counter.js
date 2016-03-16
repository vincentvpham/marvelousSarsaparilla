import React, {
  Component,
  Navigator,
} from 'react-native';

var PaktListView = require('./paktListView');
// var CameraView = require('./cameraView');

export default class Pakt extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'My First Scene', index: 0 }}
        renderScene = {(route, navigator) =>
          // <CameraView />
          <PaktListView />
        }
      />
    );
  }
}
