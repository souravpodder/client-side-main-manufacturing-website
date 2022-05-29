import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ removingOrder, setRemovingOrder, myOrders, setMyOrders }) => {
  const { _id, itemName, email } = removingOrder;
  console.log(removingOrder);
  const handleDelete = (id) => {
    fetch(`https://floating-sierra-37229.herokuapp.com/order/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        toast('order deleted');
        const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
        setMyOrders(remainingOrders);
        setRemovingOrder(null);
      })

  }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">Sure to delete {itemName} from the list?</h3>
          <p class="py-4">If you Delete this item it will be removed from your orders!</p>
          <div class="modal-action">
            <button class="btn btn-sm btn-error" onClick={() => handleDelete(_id)}>Delete</button>
            <label for="delete-confirm-modal" class="btn btn-sm">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;