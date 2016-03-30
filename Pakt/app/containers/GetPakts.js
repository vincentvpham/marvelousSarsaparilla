import { connect } from 'react-redux';
import { setCurrentPakt, fetchPaktsIfNeeded } from '../actions';
import PaktList from '../components/PaktList';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    pakts: state.pakts.items,
    isFetching: state.pakts.isFetching,
    isRefreshing: state.pakts.isRefreshing,
    currentUserId: state.users.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listThePakts: () => {
      dispatch(fetchPaktsIfNeeded());
    },
    onPaktClick: (currentPakt) => {
      dispatch(setCurrentPakt(currentPakt));
      Actions.individualPakt();
    },
    onRefresh: () => {
      dispatch(fetchPaktsIfNeeded(true));
    },
  };
};

const GetPakts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaktList);

export default GetPakts;
