import React from 'react'
import './App.css'
import {Switch, Route, useHistory} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';


function App() {
  const { push } = useHistory()

  return (
    <div>
    <h1>Welcom to Customer Registration</h1>  

    <nav className="navbar navbar-expand-lg navbar-light nav-text-color menu-backgroud  p-3">
      <div className="container-fluid">
        {/* <span className="navbar-brand mb-0 h1">Login to Register</span> */}
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav">
          {/* <NavLinkItem className="active" aria-current="page" to="/login" text="Login" /> */}
          <NavLinkItem className="active" aria-current="page"/>
          <NavLinkItem to="/home" text="Home Page" />
          {/* <NavLinkItem to="/customerDetails" text="Customer Details" /> */}
          <NavLinkItem to="/createNewCustomer" text="Create New Customer" />
          <NavLinkItem to="/createNewCustomer" text="Update Customer" />
          <NavLinkItem to="/createNewCustomer" text="Delete Customer" />
          <NavLinkItem to="/login" text="Login" />
        </ul>
      
      </div>
      </div>
      </nav>

    <Switch>
      
      <Route path="/createNewCustomer">
        <CustomerCreatePage />
      </Route>


      <Route path="/login">
        <LoginPage />
      </Route>
      
      <Route 
          path="/home/:id" 
          component={CustomerDetailPage} 
        />
      <Route path="/home">
        <HomePage />
      </Route>

    </Switch>

    {/* <button type="button" onClick={() => push('/login')}>
    Login to Administration
    </button> */}
    

    </div>
  );
}

export default App;
