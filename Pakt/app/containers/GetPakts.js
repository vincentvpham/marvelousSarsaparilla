import { connect } from 'react-redux';
import { fetchPaktsIfNeeded } from '../actions'
import PaktList from '../components/PaktList';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    pakts: state.pakts.items,
    isFetching: state.pakts.isFetching,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onNavPress: (name) => {
      Actions[name]();
    },

    listThePakts: () => {
      dispatch(fetchPaktsIfNeeded());
    }

  };
};

const GetPakts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaktList);

export default GetPakts;
