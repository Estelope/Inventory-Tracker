import React from "react";
import Item from "./Item.js";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <>
      <hr />
      {props.inventoryList.map((item) =>
        <Item
          onItemClicked={props.onItemSelection}
          names={item.names}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          amount={item.amount}
          id={item.id}
          key={item.id} />
      )}
    </>
  )
}

InventoryList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default InventoryList;