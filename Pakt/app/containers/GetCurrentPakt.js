import { connect } from 'react-redux';
// import { fetchPaktsIfNeeded } from '../actions'
import IndividualPakt from '../components/IndividualPakt';

const mapStateToProps = (state) => {
  return {
    currentPakt: state.pakts.currentPakt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const GetCurrentPakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPakt);

export default GetCurrentPakt;
