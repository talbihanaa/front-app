// import { useState } from "react";
// import { Redirect } from "react-router-dom";
// import axios from "axios"; // Assuming you're using axios for making HTTP requests
// import Header1 from "../Header1";
// import styled from "styled-components";

// const Container = styled.div`
//   padding: 30px 20px;
// `;

// const BlueButton = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: darkblue;
//   }
// `;

// function ProfilPage() {
//   const [redirectToTheHomePage, setRedirectToTheHomePage] = useState(false);

//   function logout() {
//     axios.post('/logout')
//       .then(() => {
//         setRedirectToTheHomePage(true);
//       });
//   }

//   return (
//     <>
//       {redirectToTheHomePage && <Redirect to="/" />}
//       <Container>
//         <Header1>Profile</Header1>
//       </Container>
//       <BlueButton onClick={logout}>Logout</BlueButton>
//     </>
//   );
// }

// export default ProfilPage;
