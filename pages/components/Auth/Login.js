import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import styles from './login.module.scss'

export default function Login() {
  const clientId = "985151455021-2sdb8kep62cce62gqo48j1r62t5n3hib.apps.googleusercontent.com";
  const[ showlogin,setShowlogin] = useState(true)
  const[showlogout,setShowlogout] = useState(false)
  const[usermame, setUsername] = useState();
  const router = useRouter()
  const onLoginSuccess = (res) =>{
        console.log('login success:',res.profileObj.imageUrl);
        router.push('/...')
        setShowlogin(false);
        setShowlogout(true);
        setUsername(res.profileObj.imageUrl);
  }
  const onDailureSuccess = (res) =>{
        console.log('login fail:',res);
        
  }
  const onSignoutSuccess = () =>{
      alert('Đăng xuất thành công');
      setShowlogin(true);
      setShowlogout(false);
  }
  return (
      <>
    <div>{showlogin ? 
      
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onDailureSuccess}
        cookiePolicy={"single_host_origin"}
      /> :''
      }
      {showlogout ? 
      <GoogleLogout className={styles.avatar}
        clientId={clientId}
        buttonText={<img src={usermame} alt=''/>}
        onLogoutSuccess={onSignoutSuccess}
      >
      </GoogleLogout> :null
      }
    </div>
    </>
  );
}
