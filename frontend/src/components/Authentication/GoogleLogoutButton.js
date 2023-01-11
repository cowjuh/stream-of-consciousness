import React from 'react';
import {GoogleLogout} from 'react-google-login';

const clientId = '979808801196-vn8rcr3df9c1qtgm1adfo4geksn3sioi.apps.googleusercontent.com';

const GoogleLogoutButton = (props) => {
    const onSuccess = (res) => {
        console.log('Logout made successfully');
        props.handleLogout();
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Log Out"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GoogleLogoutButton;