// import { useEffect, useState } from 'react';
// import axios from "axios";
// import styled from "styled-components";
// import Header1 from "../Header1";
// import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm';

// const Containerr = styled.div`
//   padding: 30px 20px;
// `;

// function QuestionPage({ match }) {
//   const [question, setQuestion] = useState(false);

//   function fetchQuestion() {
//     axios.get('http://localhost:3030/questions/' + match.params.id)
//       .then(response => {
//         setQuestion(response.data);
//       });
//   }

//   useEffect(() => {
//     fetchQuestion();
//   }, []);

//   return (
//     <Containerr>
//       {question && (
//         <>
//           <Header1>{question.title}</Header1>
//           <ReactMarkdown remarkPlugins={[gfm]} children={question.content} />
//         </>
//       )}
//     </Containerr>
//   );
// }

// export default QuestionPage;
