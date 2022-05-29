import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const partInfo = {
      name: event.target.name?.value,
      img: event.target.img?.value,
      description: event.target.description?.value,
      minimum_order: parseInt(event.target.minimum_order?.value),
      available: parseInt(event.target.available?.value),
      price: parseInt(event.target.price?.value)
    }

    fetch('https://floating-sierra-37229.herokuapp.com/part', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(partInfo)
    })
      .then(res => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          navigate('/');
          return;
        }
        return res.json();
      })
      .then(data => {
        toast.success('Product Added Successfully!')
      })
  }
  return (
    <div>
      <h2 className='text-3xl text-center text-violet-500 font-bold'>Add Product</h2>

      <div className='h-90 flex justify-center items-center'>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleAddProduct}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Parts Name</span>
                </label>
                <input type="text" placeholder="Parts Name" name='name' class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image</span>
                </label>
                <input type="text" placeholder="image link" name='img' class="input input-bordered " />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea type="text" placeholder="short description" name='description' class="input input-bordered textarea h-[90px]" required ></textarea>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Minimum Order</span>
                </label>
                <input type="number" placeholder="minimum order quantity" name='minimum_order' class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Available</span>
                </label>
                <input type="number" placeholder="available pcs" name='available' class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input type="number" placeholder="price/unit" name='price' class="input input-bordered" required />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary font-bold text-white" type='submit'>Add Product</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;