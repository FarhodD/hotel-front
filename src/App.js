import React, { useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  });

  return (
    <BrowserRouter>
      <Header />
      <div className="font-montserrat container mx-auto">
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
        {!isAuth &&
          <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
