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
import LoginUser from '../containers/LoginUser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2C3539',
  },
   headerItem: {
    flex: .5,
    flexDirection: 'row',
  },
   title: {
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 45,
    fontFamily: 'Optima',
  },
   logout: {
    fontWeight: 'bold',
    height:100,
    marginTop: 25,
    width:200,
    fontSize: 15,
  },
});

const Header = ({ title }) => (
<View style={styles.container} >
  <View style={styles.headerItem} >
    <Text style={styles.title}>{title}</Text>
  </View>
  <View style={styles.headerItem} >
    <View style={styles.logout}>
      <LoginUser/>
    </View>
  </View>
</View>
);

module.exports = Header;