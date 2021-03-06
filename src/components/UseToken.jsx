import { useState } from 'react';

export default function UseToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('CUSTOMERS');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('CUSTOMERS', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  console.log("save:" + saveToken)
  
  return {
    setToken: saveToken,
    token
  }
}