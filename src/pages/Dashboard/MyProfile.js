import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const navigate = useNavigate();

  const [education, setEducation] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedIn] = useState('');

  const [user, loading] = useAuthState(auth);
  const [myInfo, setMyInfo] = useState('');
  useEffect(() => {
    fetch(`https://floating-sierra-37229.herokuapp.com/user/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setEducation(data.education);
        setCity(data.city);
        setPhone(data.phone);
        setLinkedIn(data.linkedin);
      })
  }, [user.email])



  const handleEducationBlur = event => {
    setEducation(event.target.value);
  }
  const handleCityBlur = event => {
    setCity(event.target.value);
  }
  const handlePhoneBlur = event => {
    setPhone(event.target.value);
  }
  const handleLinkedBlur = event => {
    setLinkedIn(event.target.value);
  }

  const handleMyProfile = (event) => {
    event.preventDefault();
    const userInfo = {
      education: education,
      city: city,
      phone: phone,
      linkedin: linkedin
    }

    console.log(userInfo);

    fetch(`https://floating-sierra-37229.herokuapp.com/user/${user.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          navigate('/');
        }
        return res.json();
      })
      .then(data => {

        toast('User Info Updated Successfully');


      })

  }

  if (user) {
    // console.log(user)
  }

  return (
    <div>
      <h2 className='text-3xl text-center text-violet-500 font-bold mt-5 mb-2'>My Profile</h2>

      <div className='h-90 flex justify-center'>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder={user.displayName} name='name' class="input input-bordered font-semibold text-xl" readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder={user.email} name='email' class="input input-bordered font-semibold text-xl" readOnly />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input type="text" placeholder={education} name='education' class="input input-bordered font-semibold" onBlur={handleEducationBlur} />

              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input type="text" placeholder={city} name='city' class="input input-bordered font-semibold" onBlur={handleCityBlur} />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Mobile No.</span>
                </label>
                <input type="text" placeholder={phone} name='phone' class="input input-bordered font-semibold" onBlur={handlePhoneBlur} />

              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">LinkedIn Profile</span>
                </label>
                <input type="text" placeholder={linkedin} name='linkedin' class="input input-bordered" onBlur={handleLinkedBlur} />

              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary font-bold text-white" type='submit' onClick={handleMyProfile}>Update Profile</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;