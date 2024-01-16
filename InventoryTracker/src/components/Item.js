import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const itemStyles = {
    fontFamily: 'sans-serif'
  }

  return (
    <>
      <div style={itemStyles}
           onClick={() => props.onItemClicked(props.id)}>
        <h3>{props.names} - {props.origin}</h3>
        <p>amount in stock: {props.amount}</p>
        <hr />
      </div>
    </>
  );
}

Item.propTypes = {
  names: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onItemClicked: PropTypes.func
}

export default Item;