import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import BizDetails from './containers/BizDetails'
import Listings from './containers/Listings'
import NewListing from './containers/NewListing'
import Login from './components/Login'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies.loggedIn ? true : false;
  };

  const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
  
    return checkAuth() === true ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/login" />
    );
  };

const Router = () => {
    return (
        <Routes>
          <Route path='/details/:id' element={<BizDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/newListing" element={<ProtectedRoute component={NewListing} />}/>
        </Routes>
    )
}

export default Router;