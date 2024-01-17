import React from 'react';
import NewItemForm from './NewItemForm';
import InventoryList from './InventoryList';
import EditItemForm from './EditItemForm';
import ItemDetail from './ItemDetail';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }


  handleDeletingItem = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(item => item.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedItem: null
    });
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newItem);
    this.setState({ mainInventoryList: newMainInventoryList });
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleUpdateItemAmount = (itemToUpdate, delta) => {
    const updatedAmount = itemToUpdate.amount + delta;

    if (updatedAmount > 0) {
      const updatedItem = { ...itemToUpdate, amount: updatedAmount };

      const newMainInventoryList = this.state.mainInventoryList
        .filter(item => item.id !== itemToUpdate.id)
        .concat(updatedItem);

      this.setState({
        mainInventoryList: newMainInventoryList,
        selectedItem: updatedItem
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = < EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditingItemInList} />
      buttonText = "Return to Inventory List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail
        item={this.state.selectedItem}
        onClickingDelete={this.handleDeletingItem}
        onClickingEdit={this.handleEditClick}
        onClickingUpdateAmount={this.handleUpdateItemAmount} />
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = < InventoryList onItemSelection={this.handleChangingSelectedItem} inventoryList={this.state.mainInventoryList} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;

