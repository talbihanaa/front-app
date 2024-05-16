import { useState ,useContext} from "react";
import react from 'react';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import AskPage from "./views/AskPage";
import QuestionsPage from "./views/QuestionsPage"
import Header from "./components/Header";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import './App.css';
import GlobalStyle from "./GlobalStyle"
import {  Routes, Route } from 'react-router-dom';
import { userContext } from "./UserContext";
import QuestionPage from './components/QuestionPage';
import QuestionsRowPage from './components/QuestionsRow';
// import Post from './components/Post';
// import ProfilPage from './components/ProfilPage';

function App() {
  const [user, setUser] = useState(null);
  const post = {
    // 
    
    comments: [
      { text: 'Great post!', id: 1 },
      { text: 'I enjoyed reading this.', id: 2 }
    ]
  };

  // Wrap your components with the context provider if you want to provide the context value
  return (
    
    <div>
      <GlobalStyle/>
      <Reset />
      <GlobalStyle/>
      
      <userContext.Provider value={user}>
        <Header/>
        <Routes>
          <Route path="/" element={<QuestionsPage />} />
          <Route path="/Login" element={<LoginPage />} />
          {/* <Route path="/profil" element={<ProfilPage />} /> */}
          <Route path="/Register" element={<RegisterPage/>} />
          <Route path="/questions/:id" element={<QuestionPage/>}/>
          <Route path="/ask" element={<AskPage />} />
          
      
        </Routes>
        {/* <ProfilPage /> */}
      </userContext.Provider>
      {/* <Post post={post} /> */}
      
    </div>
  );
}

export default App;
