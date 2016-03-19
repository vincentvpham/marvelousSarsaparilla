import { connect } from 'react-redux';
import { setCurrentPakt, fetchPaktsIfNeeded } from '../actions';
import PaktList from '../components/PaktList';

const mapStateToProps = (state) => {
  return {
    pakts: state.pakts.items,
    isFetching: state.pakts.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listThePakts: () => {
      dispatch(fetchPaktsIfNeeded());
    },
    onPaktClick: (paktId) => {
      dispatch(setCurrentPakt(paktId));
    },
  };
};

const GetPakts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaktList);

export default GetPakts;
