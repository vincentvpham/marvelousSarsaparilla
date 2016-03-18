import { connect } from 'react-redux';
import { fetchPaktsIfNeeded } from '../actions'
import PaktList from '../components/PaktList';

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
  null,
  mapDispatchToProps
)(PaktList);

export default GetPakts;
