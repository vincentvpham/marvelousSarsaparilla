import React, {
  Animated,
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';
import LoginUser from '../containers/LoginUser';

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    left: 57,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D6D6',
  },
});

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {fadeAnim: new Animated.Value(0)};
  }

  componentDidMount() {
    Animated.timing(          
      this.state.fadeAnim,    
      {
        toValue: 1,
        duration:5000
      },
    ).start();                
  }
  renderLanding() {
    return (


      <View style={styles.loadingContainer} >
        <Image source={ require('../assets/img/scales.png') }
          style={{position: 'absolute', top: 0, left: 0}}
        />
        <Image source={ require('../assets/img/pakt_logo_blank.png') }
          style={{position: 'absolute', justifyContent: 'center', left: 58, top: 165}}
        />
        <Animated.Image source={ require('../assets/img/pakt_logo.png') }
          style={{opacity:this.state.fadeAnim, position: 'absolute', justifyContent: 'center', left: 58, top: 165}}
        />
      </View>
    )
  }
  render() {
    return this.renderLanding();
  }



}



export default Landing;