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
  ScrollView,
  Alert,
} from 'react-native';
var _ = require('lodash');

import FriendsRow from './FriendsRow';
var moment = require('moment');

moment([2007, 0, 29]).fromNow(); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: '#F5FCFF',
  },
  pictureContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    marginTop: 15,
    fontSize: 22,
    justifyContent:'center',
  },
  subheading: {
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 4,
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent:'center',
  },
  info: {
    fontSize: 15,
    margin: 1,
    justifyContent:'center',
    textAlign:'justify',
  },
});

class PaktPics extends Component {
  constructor(props) {
    super(props);
  }
  renderPicsView() {
    const { paktPictures, selectedUser } = this.props;
    //want to only display pics from selected user
    let selectedUserPics = paktPictures.filter(function(x){return x.UserId === selectedUser});
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(selectedUserPics);

    return (
      <View>
        {paktPictures.length > 0 ? <Text style={styles.subheading}>Pictures:</Text> : null}
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/pakt-test/' + rowData.path}}
                                     style={{width: 50, height: 50}} /> }
        />
      </View>
    );
  }

  render() {
    return this.renderPicsView();
  }

}

const IndividualPakt = ({ currentPakt, respondtoInvite, accepted, currentUserId, paktPictures, selectedUser, setSelectedUser }) => (
  <View style={styles.container}>
    <ScrollView>
        <Header open={currentPakt.open}  win={currentPakt.Pakt_User.win} paktName={currentPakt.name}/>
        <Text style={styles.subheading}>{currentPakt.description}</Text>
        <Text style={styles.subtitle}>{'Consequence:'}</Text>
        <Text style={styles.info}>{currentPakt.consequenceText}</Text>
        { currentPakt.repeating? <DisplayFrequency frequency={currentPakt.frequency}/> : null }
        <Text style={styles.subtitle}>{'Pakt Length:'}</Text>
        <Text style={styles.info}>{ formatDate(currentPakt.createdAt) + ' - ' + formatDate(currentPakt.endDate) }</Text>
        <Text style={styles.subtitle}>{'Time Left:'}</Text>
        <Text style={styles.info}>{countWeeks(currentPakt.endDate)}</Text>
      <View>
      <ShowFriends setSelectedUser={setSelectedUser} open={currentPakt.open} friends={currentPakt.Users}/>
        {accepted ? <PaktPics selectedUser={selectedUser} paktPictures={paktPictures} /> :
          <View>
            <TouchableHighlight onPress={() => respondtoInvite(true, currentUserId, currentPakt.id)}><Text>Accept</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert(
              'Are you sure you want to decline this Pakt',
              null,
              [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => respondtoInvite(false, currentUserId, currentPakt.id) },
              ]
            )
            }><Text>Decline</Text></TouchableHighlight>
          </View>
          }
      </View>
    </ScrollView>
  </View>
);

class ShowFriends extends React.Component {
  render(){
    const {open, friends, currentPakt, setSelectedUser} = this.props;
    return open ? <FriendsRow title={'Friends:'} setSelectedUser={setSelectedUser} numAllowedClicks={1} friends={friends}/> : <WinnersLosersView friends={friends}/>;
  }
}

class WinnersLosersView extends React.Component {
  constructor(props) {
    super(props);
    const {friends} =  this.props;

    //make winners and losers array from the friends array
    this.state = {};
    this.state.losers = friends.filter(function(x){return x.Pakt_User.win === false});
    this.state.winners = friends.filter(function(x){return x.Pakt_User.win === true});
  }

  render(){
    return (
      <View>
        <FriendsRow setSelectedUser={setSelectedUser} numAllowedClicks={1} friends={this.state.winners} title={'Winners:'}/>
        <FriendsRow setSelectedUser={setSelectedUser} numAllowedClicks={1} friends={this.state.losers} title={'Losers:'}/>
      </View>
    );  
  };
}

class Header extends React.Component {
  renderWinLossHeading() {
    const { win, paktName } = this.props;
    return (
      win ? 'You won '+ paktName + '!' : 'You lost ' + paktName
    );
  }

  render(){
    const {open, paktName} = this.props;
      return (
        <View>
          <Text style={styles.heading}>{ open ? paktName : this.renderWinLossHeading() }</Text> 
       </View>
      );
  }
}

const DisplayFrequency = ({ frequency }) => (
  <View>
    <Text style={styles.subtitle}>{'Times Per Week'}</Text> 
    <Text style={styles.info}>{frequency}</Text>
  </View>
);

// Moment js date display formating helpers
const countWeeks = (endDate) =>   {
  var end = moment(endDate);
  var start = moment(new Date());
  var weeksLeft = end.diff(start, 'weeks');
  if (parseInt(weeksLeft) <= 1){
     daysLeft = end.diff(start, 'days');
     return daysLeft + ' days';
  } else {
    return weeksLeft + ' weeks';
  }
};

const formatDate = (date) =>   {
  return moment(date).format("dddd, MMMM Do");
};

export default IndividualPakt;
