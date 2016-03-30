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
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    const { pakts, onPaktClick, isRefreshing, onRefresh } = this.props;
    const rows = pakts.map((pakt) => {
      return <PaktListItem pakt={pakt} onPaktClick={onPaktClick} />;
    });

    return (
      <ScrollView style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#ff0000"
            title="Refreshing..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00" />
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
