import React from 'react';
import { toast } from 'react-toastify';

const DeletePartModal = ({ removingPart, setRemovingPart, refetch }) => {
  const { _id, name } = removingPart;
  console.log(removingPart);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/part/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        toast('part deleted');
        // const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
        // setMyOrders(remainingOrders);
        refetch();
        setRemovingPart(null);
      })

  }
  return (
    <div>
      <input type="checkbox" id="delete-part-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">Are you Sure to delete {name} from the list?</h3>
          <p class="py-4">If you Delete this item it will be removed from the page completely!</p>
          <div class="modal-action">
            <button class="btn btn-sm btn-error" onClick={() => handleDelete(_id)}>Delete</button>
            <label for="delete-part-modal" class="btn btn-sm">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePartModal;