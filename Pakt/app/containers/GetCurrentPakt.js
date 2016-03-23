import { connect } from 'react-redux';
import { respondToPaktInvite } from '../actions';
import IndividualPakt from '../components/IndividualPakt';

const mapStateToProps = (state) => {
  return {
    currentPakt: state.pakts.currentPakt,
    currentUserId: state.users.currentUser.id,
    // hard code index 0 for now
    accepted: state.pakts.currentPakt.Pakt_Users[0].accepted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    respondtoInvite: (accepted) => {
      dispatch(respondToPaktInvite({ accepted }));
    },
  };
};

const GetCurrentPakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPakt);

export default GetCurrentPakt;
