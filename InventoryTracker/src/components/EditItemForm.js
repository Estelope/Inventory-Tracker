import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      names: event.target.names.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      amount: parseInt(event.target.amount.value),
      id: item.id
    })
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Item" />
    </>
  )
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;