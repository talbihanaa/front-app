import React, { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import Header1 from "../Header1";
import axios from 'axios';
import { login } from "../Api/authApi";

const QuestionInput = styled.div`
  padding: 30px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #ccc; 
  background-color: transparent; 
  color: black;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 50%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); 
  await login({email,password})
    .then(response => {
      console.log(response); 
    })
    .catch(error => {
      console.error('Error:', error); 
    });
  };

    
  

  return (
    <QuestionInput>
      <Header1 style={{ marginBottom: "20px" }}>Login</Header1>
      <Form onSubmit={handleSubmit}>
       
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" >Login</Button>
        <Link to="/Register">you don't have an account ?</Link>
      </Form>
    </QuestionInput>
  );
}

export default LoginPage;
