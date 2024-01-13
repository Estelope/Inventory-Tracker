import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      names: event.target.names.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value,
      roast: event.target.roast.value,
      amount: parseInt(event.target.amount.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;