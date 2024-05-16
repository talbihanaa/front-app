// AskPage.js
import React from 'react';
import styled from 'styled-components';
// Importez Header1 si nécessaire
// import Header1 from './Header1';
import BlueButton from '../components/BlueButton';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {useState} from 'react';


// Assurez-vous que Header1 est défini ou utilisé correctement dans votre composant AskPage


const QuestionInput=styled.div`
padding: 30px 20px;
`;
const QuestionTitleInput=styled.input`
background:none;
border: 1px solid #777;
border-radius: 3px;
display: block;
width:100%;
box-sizing: border-box;
padding:10px;
margin-bottom:20px;
color:#fff;
`;
const QuestionBodyTextarea=styled.textarea`
background:none;
border: 1px solid #777;
border-radius: 3px;
display: block;
width:100%;
box-sizing: border-box;
padding:10px;
min-height:200px;
margin-bottom:20px;
color:#fff;
font-family:inherit;
`;
const PreviewArea =styled.div`
padding:10px 20px;
background-color: #444;
border-radius:5px;
margin-bottom:20px;
`;
const AskPage = () => {
  const [questionTitle, setQuestionTitle]= useState('');
  const [questionBody, setQuestionBody]= useState('');
  return (
    <QuestionInput>
      <h1 style={{marginBottom:'20px'}}>Ask a public question</h1>
      <QuestionTitleInput type="text" value={questionTitle} onchange={e => setQuestionTitle(e.target.value)} placeholder="Title of your question"/>
      <QuestionBodyTextarea 
      onChange={e => setQuestionBody(e.target.value)}
      placeholder="More info about your question. You can use markdom here">{questionBody}</QuestionBodyTextarea>
     
      <PreviewArea>
      <ReactMarkdown remarkPlugins={[gfm]} children={questionBody} />
      </PreviewArea>
      <BlueButton>Post question</BlueButton>
    </QuestionInput>
  );
}

export default AskPage;
