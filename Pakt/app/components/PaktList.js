import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
  RefreshControl,
  ScrollView,
} from 'react-native';

import PaktListItem from './PaktListItem';
import Loading from './Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  scrollView: {
    flex: 1,
    backgroundColor: '#D0D6D6',
    marginBottom: 48,
  },
});

class PaktList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.listThePakts();
  }



  renderPaktsView() {
    const { pakts, onPaktClick, isRefreshing, onRefresh, currentUserId } = this.props;
    const rows = pakts.map((pakt) => {
      return <PaktListItem pakt={pakt} onPaktClick={onPaktClick} currentUserId={currentUserId} />;
    });

    return (
      <ScrollView style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#D0D6D6"
            colors={['#D0D6D6', '#D0D6D6', '#D0D6D6']}
            progressBackgroundColor="#D0D6D6" />
          }>
        {rows}
      </ScrollView>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (isFetching) ? <Loading displayText = {'Loading Pakts...'}/> : this.renderPaktsView();
  }

}

export default PaktList;
