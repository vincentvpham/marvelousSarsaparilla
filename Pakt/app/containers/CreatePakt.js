import { connect } from 'react-redux';
import { submitPakt } from '../actions'
import CreatePaktForm from '../components/CreatePaktForm';

const mapStateToProps = (state) => {
  return {
    formInputs: {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitFormInputs: (formInputs) => {
      //set isMonetary to false, since for now all bets are non-monetary
      formInputs.isMonetary = false;
      //setting default values, may want to put these in the model, server-side
      formInputs.settled = false;
      formInputs.open = true;
      //turn the strings into integers to match pakt model
      formInputs.timeFrame = parseInt(formInputs.timeFrame);
      formInputs.frequency = parseInt(formInputs.frequency);
      dispatch(submitPakt(formInputs));
    },
  };
};

const CreatePakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePaktForm);

export default CreatePakt;