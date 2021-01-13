import React from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import LoginPage from './pages/LoginPage'


function App() {
  const { push } = useHistory()

  return (
    <div>
    <h1>Welcom to Customer Registration</h1>

    <Switch>
      <Route path="/Login">
        <LoginPage />
      </Route>
      <Route path="/Home">
        <LoginPage />
      </Route>
    </Switch>

    <button type="button" onClick={() => push('/Login')}>
    Login to Administration
    </button>
    

    </div>
  );
}

export default App;
