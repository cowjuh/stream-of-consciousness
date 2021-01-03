import React from 'react';
import {GoogleLogin} from 'react-google-login';

const clientId = '979808801196-vn8rcr3df9c1qtgm1adfo4geksn3sioi.apps.googleusercontent.com';

function Login(props) {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj);
        props.updateUser(res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res: ', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login; 