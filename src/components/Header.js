import styled from 'styled-components';
// import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
// import {faStackOverFlow} from'@fortawesome/fontawesome-free-brands';
// import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from "react-router-dom";
// import {userContext} from '../UserContext';




const StyledHeader = styled.header`
background-color:#393939;
box-shadow: 0 3px 3px rgba (0,0,0.2);
display:grid;
grid-template-columns: 220px 1fr 200px;
grid-column-gap:20px;
`;

const LogoLink = styled(Link)`
color:#fff;
text-decoration:none;

height:50px;
line-height:50px;
svg{
    margin-top:10px;
    display:inline-block;
    float:left;
    
}
span{
    display:inline-block;
    padding-left:5px;
    padding-top:5px;
    padding-top:20px;
    font-size:1.2rem;
    font-weight:300;
}
b{
    font-weight:normal;
    display:inline-block;
    margin-left:2px;
}
`;
const SearchInput=  styled.input`
display:inline-block;
box-sizing:border-box;
width:100%;
border-rediuce:3px;
border:1px solid #555;
background:#222;
color:#fff;

padding:8px 10px;
margin-top:9px;

`;
const ProfileLink=styled(Link)`
color:#fff;
text-decoration:none;
line-height:50px;
`;

function Header() {
    // const {user} = userContext(userContext);
    return(
        <StyledHeader>
        <LogoLink to={'/'} className='logo'>
        {/* <FontAwesomeIcon icon={faStackOverflow} size="3x" /> */}

        <span style={{ color: '#fff', textDecoration: 'none', display: 'inline-block', padding: '5px 10px', fontSize: '1.2rem', fontWeight: '300' }}>stack <b>overflow</b></span>
            </LogoLink>
        <form action="" className='search'>
            <SearchInput type='text' placeholder='search...'/>
        </form>
    {/* {user &&(
        <ProfileLink to={'/profile'} className='profile'></ProfileLink>

    )}
    {user &&(
        <ProfileLink href={'/login'} className='profile'>Log in</ProfileLink>

    )} */}
    <div style={{margin:20, }}>
            <Link to="/Login" style={{ marginRight: 10 }}>Login</Link>

            <Link to="/Register" style={{ marginLeft: '10px' }}>Register</Link>
</div>

    </StyledHeader>
    )
}
export default Header;