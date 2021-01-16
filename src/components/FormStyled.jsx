import styled from 'styled-components'



const Headermiddle = styled.h3`
  margin-right: auto;
  margin-left: 230px;
`

const Form = styled.form`
  background-color: #FFF;
  height: 600px;
  width: 600px;
  margin-right: auto;
  margin-left: 5px;
  margin-top: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px;
  text-align:center;
`

const Label = styled.label`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  color: #333;
  height: 20px;
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: right;
  clear: both;
  float:left;
  margin-right:15px;
`

const Input = styled.input`
  height: 20px;
  width: 300px;
  border: 1px solid #000;
  margin-top: 10px;
  float: left;
`


const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  font-size:bold;
  background-color:#a70a3e;
  color:white;
  font-weight: bold;
  `

  export {Headermiddle, Form, Label, Input, Button}