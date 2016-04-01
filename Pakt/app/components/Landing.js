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
    justifyContent: 'center',
    position: 'absolute',
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
        duration:3000
      },
    ).start();                
  }
  renderLanding() {
    return (
      <View style={styles.loadingContainer} >
        <Image source={ require('../assets/img/pakt_logo_blank.png') }
          style={styles.loading}
        />
        <Animated.Image source={ require('../assets/img/pakt_logo.png') }
          style={{opacity:this.state.fadeAnim, position: 'relative', justifyContent: 'center'}}
        />
      </View>
    )
  }
  render() {
    return this.renderLanding();
  }



}



export default Landing;