import Head from "next/head"
import styled from "styled-components"
import Button from '@mui/material/Button';
import {auth, provider} from "../firebase";
import { signInWithPopup, } from "firebase/auth";

function Login() {
  const signIn = () =>{
   signInWithPopup(auth, provider).catch(alert);
  };
  return (
    <Container>
        <Head>
            <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src=
"https://imgs.search.brave.com/YNAt8hFIqpogTCotf09O-Lnn-1Lu_i2EVs6h_T6PqcA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZnJl/di5uZXQvd3AtY29u/dGVudC9waG90b3Mv/MjAxNi8wNi93aGF0/c0FwcC1sb2dvLTEu/cG5n"/>
<Button onClick={signIn} variant="outlined">Sign in with Google</Button>

            </LoginContainer>
    </Container>
    

  )
}

export default Login;

const Container =styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:#0a1014;
`;
const LoginContainer= styled.div`
display:flex;
padding:100px;
align-items:center;
background-color:#0a1014;
flex-direction:column;
border-radius:9px;
box-shadow:0px 12px 19px -3px  #05004e;
`;
const Logo= styled.img`
height:100px;
width:100px;
margin-bottom:50px;
`;