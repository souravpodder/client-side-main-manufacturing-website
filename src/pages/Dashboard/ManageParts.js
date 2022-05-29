import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeletePartModal from './DeletePartModal';


const ManageParts = () => {


  const [removingPart, setRemovingPart] = useState(false);


  const { data: parts, isLoading, refetch } = useQuery('parts', () =>
    fetch('https://floating-sierra-37229.herokuapp.com/parts',).then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h2 className='text-3xl text-center text-violet-500 font-bold'>Manage Parts</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">

          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              parts.map((part, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{part.name}</td>
                <td>{part.available}</td>
                <td>

                  <label for="delete-part-modal" class="btn btn-sm btn-error" onClick={() => setRemovingPart(part)} >Delete</label>
                  {/* <label for="delete-confirm-modal" class="btn btn-sm btn-error" onClick={() => setRemovingOrder(order)}>Delete</label>} */}


                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {removingPart && <DeletePartModal removingPart={removingPart} setRemovingPart={setRemovingPart} refetch={refetch}></DeletePartModal>}
    </div>
  );
};

export default ManageParts;