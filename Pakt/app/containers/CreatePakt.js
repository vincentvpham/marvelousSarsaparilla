import { connect } from 'react-redux';
import { submitPakt, fetchFriends } from '../actions'
import CreatePaktForm from '../components/CreatePaktForm';

const mapStateToProps = (state) => {
  return {
    friends: state.users.friends,
    isFetchingFriends: state.users.isFetchingFriends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormInputs: (formInputs) => {
      //set isMonetary to false, since for now all bets are non-monetary
      formInputs.isMonetary = false;
      //turn the strings into integers to match pakt model
      formInputs.timeFrame = parseInt(formInputs.timeFrame);
      formInputs.frequency = parseInt(formInputs.frequency);
      dispatch(submitPakt(formInputs));
    },
    listTheFriends: () => {
      dispatch(fetchFriends());
    },
  };
};

const CreatePakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePaktForm);

export default CreatePakt;