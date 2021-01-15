import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'


const Heading = styled.h1`
  font-size: 2rem;
  color: #a70a3e;
  `

function App() {

  return (
    <div>
    <h1>Customer Registration Platform</h1>  

    <nav className="navbar navbar-expand-lg navbar-light nav-text-color menu-backgroud  p-1">
      <div className="container-fluid">
        {/* <span className="navbar-brand mb-0 h1">Login to Register</span> */}
         
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {/* <NavLinkItem className="active" aria-current="page" to="/login" text="Login" /> */}
            <NavLinkItem className="active" aria-current="page"/>
            <NavLinkItem to="/home" text="Home Page" />
            <NavLinkItem to="/home/create" text="Create New Customer" />
            <NavLinkItem to="/login" text="Login" />
          </ul>
        </div>
      </div>
      <nav className="justify-content-end pr-lg-5">
        <form>
        <div>
        <label>Email: </label>
        <output>Test</output>
        </div>
        <div>
        <label>FirstName: </label>
        <output>Test</output>
        <label>LastName: </label>
        <output>Test</output>
        </div>
        </form>
      </nav>
    </nav>

    <Switch>
      
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/home/create">
          <CustomerCreatePage />
        </Route>

      <Route 
          path="/home/:id/edit" 
          component={CustomerUpdatePage} 
        />
      
      <Route 
          path="/home/:id" 
          component={CustomerDetailPage} 
        />

      <Route path="/home">
        <HomePage />
      </Route>

      <Route path="/">
        <Heading>Please login to administrate customers.</Heading>
      </Route>

    </Switch>

    </div>
  );
}

export default App;
