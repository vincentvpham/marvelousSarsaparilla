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
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const IndividualPakt = ({ currentPakt, respondtoInvite, accepted, currentUserId }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text>{currentPakt.name}</Text>
      <Text>{currentPakt.description}</Text>
      {(accepted) ? null :
        <View>
          <TouchableHighlight onPress={() => respondtoInvite(true, currentUserId)}><Text>Accept</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert(
            'Are you sure you want to decline this Pakt',
            null,
            [
              { text: 'Cancel' },
              { text: 'OK', onPress: () => respondtoInvite(false) },
            ]
          )
          }><Text>Decline</Text></TouchableHighlight>
        </View>
        }
    </View>
  </View>
);

export default IndividualPakt;