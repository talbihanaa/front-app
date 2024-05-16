import styled from "styled-components";
import {useState, useEffect} from 'react';
import axios from 'axios';

import QuestionRow from "../components/QuestionsRow";
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';


const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  gap: 10px;
`;

const BlueButton = styled(Link)`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
`;

// const QuestionRow = styled.div`
//   background-color: rgba(255, 255, 255, 0.1);
//   padding: 15px 15px;
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(3, minmax(min-content, 50px)) 1fr minmax(auto, 100px); /* Added a column for tags */
//   gap: 10px;
//   align-items: center;
//   border-top:1px solid #555;
// `;

// const QuestionStat = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: #aaa;
// `;

// const StatNumber = styled.span`
//   font-weight: bold;
// `;

// const StatText = styled.span`
//   margin-top: 4px;
//   font-size: 0.7rem;
//   font-weight: 300;
// `;

// const QuestionTitleArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const QuestionLink = styled.a`
//   text-decoration: none;
//   color: #3ca4ff;
//   font-size: 1.1rem;
//   display:block;
//   margin:bottom:10px;
  
  
// `;

// const Tag = styled.span`
//   display: inline-block;
//   margin-right: 3px;
//   background-color: #3e4a52;
//   color: #9cc3db;
//   padding: 7px;
//   border-radius: 4px;
  
// `;

function QuestionPage() {
 const[questions, setQuestions] = useState([]);
  function fetchQuestion(){
    axios.get('/questions', {withCredentials:true})
    .then(response =>setQuestions(response.data));
  }
  // useEffect(()=>fetchQuestions(), []);
  return (
    <main>
      <HeaderRow>
        <StyledHeader>  Questions  </StyledHeader>
        <BlueButton> <Link to="/ask"Top> Ask Question </Link></BlueButton>
        
        
      </HeaderRow>
      {questions && questions.length && questions.map(question => (
        <QuestionRow/>
      ))}


      {/* <QuestionRow> */}
        {/* <QuestionStat>
          <StatNumber>0</StatNumber>
          <StatText>votes</StatText>
        </QuestionStat>

        <QuestionStat>
          <StatNumber>1</StatNumber>
          <StatText>answer</StatText>
        </QuestionStat>

        <QuestionStat>
          <StatNumber>6</StatNumber>
          <StatText>views</StatText>
        </QuestionStat>

        <QuestionTitleArea>
          <QuestionLink>Getting string in quotes in JavaScript</QuestionLink>
          <div>
            <Tag>javascript</Tag>
            <Tag>parsing</Tag>
            <Tag>quotes</Tag>
            <Tag>literals</Tag>
          </div>
        </QuestionTitleArea> */}
      {/* </QuestionRow> */}
    </main>
  );
}

export default QuestionPage;
