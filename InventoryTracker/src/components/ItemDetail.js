import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete, onClickingEdit, onClickingUpdateAmount } = props; 

  function handleDecrementingAmount(){
    onClickingUpdateAmount(item, -1);
  }
  
  function handleIncrementingAmount(){
    onClickingUpdateAmount(item, 1);
  }

  return (
    <React.Fragment>
      <h1>This Bean's Details</h1>
      <h3>{item.origin} - {item.names} - {item.roast}</h3>
      <p><em>{item.amount}</em></p>
      <button onClick={handleIncrementingAmount}>Increase Amount</button>
      <button onClick={handleDecrementingAmount}>Decrease Amount</button>
      <br />
      <button onClick={() => onClickingEdit(item.id)}>Edit </button>
      <button onClick={() => onClickingDelete(item.id)}>Delete</button>
      <br />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ItemDetail;