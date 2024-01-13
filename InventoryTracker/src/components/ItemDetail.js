import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Bean Details</h1>
      <h3>{item.origin} - {item.names} - {item.roast}</h3>
      <p><em>{item.amount}</em></p>
      <button onClick={onClickingEdit}>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id)}>Delete item </button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ItemDetail;