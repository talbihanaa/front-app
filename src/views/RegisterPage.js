import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import Header1 from "../Header1";
import { register } from "../Api/authApi";

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
  color:weight;
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

function RegisterPage() {
  const[username, setUserName]= useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await register({username,email,password})
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <QuestionInput>
      <Header1 style={{ marginBottom: "20px" }}>Register</Header1>
      <Form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <Button type="submit">inscription</Button>
        <Link to="/Login">you already have an account ?</Link>
      </Form>
    </QuestionInput>
  );
}

export default RegisterPage;
