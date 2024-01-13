import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Bean Name"
          required />
        <br />
        <input
          type="text"
          name="origin"
          placeholder="origin"
          required />
        <br />
        <input
          type="text"
          name="roast"
          placeholder="roast color"
          required />
        <br />
        <textarea
          name="price"
          type="number"
          placeholder="price per pound"
          required />
        <br />
        <label htmlFor="amount">Amount: usually in 130lb burlaps: </label>
        <input
          type="number"
          name="amount"
          min="1"
          max="9999"
          defaultValue="130"
          placeholder="amount in lbs"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReusableForm;