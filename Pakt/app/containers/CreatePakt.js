import { connect } from 'react-redux';
import { submitPakt } from '../actions'
import CreatePaktForm from '../components/CreatePaktForm';

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
  };
};

const CreatePakt = connect(
  null,
  mapDispatchToProps
)(CreatePaktForm);

export default CreatePakt;