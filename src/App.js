import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
// react toast import 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import Navbar from './pages/Shared/Navbar';
import RequireAdmin from './pages/Login/RequireAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageParts from './pages/Dashboard/ManageParts';
import MakePayment from './pages/Dashboard/MakePayment';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>

        {/* user authentication routes */}
        <Route path='/purchase/:itemId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        {/* dashboard routes  */}

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >

          <Route index element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='myProfile' element={<MyProfile />} />
          <Route path='payment/:id' element={<MakePayment />} />

          {/* admin routes  */}
          <Route path='manageorder' element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          } />
          <Route path='addproduct' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          } />
          <Route path='makeadmin' element={
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          } />
          <Route path='manageparts' element={
            <RequireAdmin>
              <ManageParts />
            </RequireAdmin>
          } />
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div >
  );
}

export default App;
