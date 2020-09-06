import React from "react";
import GoogleLogin from 'react-google-login';

export default function Signin(props) {
    const [mail, setMail] = React.useState("")
    const responseGoogle = (response) => {
        setMail(response.profileObj.email)
    }
    return (
        <>
            {mail.length ? alert("logged in as: " + mail): null}
            <GoogleLogin
                clientId="668812254509-98gvjo7f4aadvqeh1uiottqrqrsec4bv.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {props.children}
        </>
    )
}
