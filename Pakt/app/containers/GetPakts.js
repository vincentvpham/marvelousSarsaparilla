import { connect } from 'react-redux';
import { setCurrentPakt, fetchPaktsIfNeeded } from '../actions';
import PaktList from '../components/PaktList';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state) => {
  if (state.users.currentUser) {
    return {
      pakts: state.pakts.items,
      isFetching: state.pakts.isFetching,
      currentUserId: state.users.currentUser.id,
    };
  } 
};

const mapDispatchToProps = (dispatch) => {
  return {
    listThePakts: (currentUserId) => {
      dispatch(fetchPaktsIfNeeded(currentUserId));
    },
    onPaktClick: (currentPakt) => {
      dispatch(setCurrentPakt(currentPakt));
      Actions.individualPakt();
    },
  };
};

const GetPakts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaktList);

export default GetPakts;
