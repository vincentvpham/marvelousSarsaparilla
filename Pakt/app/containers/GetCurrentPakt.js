import { connect } from 'react-redux';
import { respondToPaktInvite } from '../actions';
import IndividualPakt from '../components/IndividualPakt';
var _ = require('lodash');

const mapStateToProps = (state) => {
  return {
    currentPakt: state.pakts.currentPakt,
    currentUserId: state.users.currentUser.id,
    accepted: _.find(state.pakts.currentPakt.Pakt_Users, function (user) {
      return user.UserId === state.users.currentUser.id;
    }).accepted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    respondtoInvite: (accepted, currentUserId, currentPaktId) => {
      dispatch(respondToPaktInvite(accepted, currentUserId, currentPaktId));
    },
  };
};

const GetCurrentPakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPakt);

export default GetCurrentPakt;
