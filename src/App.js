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
import WhoAmIPage from './pages/WhoAmIPage';
import styled from  'styled-components'


const Header = styled.h1`
  margin-right: auto;
  text-align: center;
`
function App() {

  return (
    <div>
    <Header>Customer Registration Platform</Header>  

    <nav className="navbar navbar-expand-lg navbar-light nav-text-color menu-backgroud  p-1">
      <div className="container-fluid" style={{width: 570}} ml-10 pl-0>
        <div  id="navbarSupportedContent" navbar-expand= "sm|-md|-lg|-xl">
          <ul className="navbar-nav">
            <NavLinkItem className="active" aria-current="page"/>
            <NavLinkItem to="/home" text="Home Page" />
            <NavLinkItem to="/home/create" text="Create New Customer" />
            <NavLinkItem to="/login" text="Login" />
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/home/create">
          <WhoAmIPage />
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
        <WhoAmIPage />
        <HomePage />
      </Route>

      <Route path="/" />

    </Switch>

    </div>
  );
}

export default App;
