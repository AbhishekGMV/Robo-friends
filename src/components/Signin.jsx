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
                clientId=`<>YOUR CLIENT ID</>`
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {props.children}
        </>
    )
}
