import React from 'react';
import {CenterViewContainer} from "../../components/Containers/CenterViewContainer";
import {LoginForm} from "../../components";

const Login = () => {
    return (
        <>
            <CenterViewContainer background={'#1d2b3a'}>
                <LoginForm/>
            </CenterViewContainer>
        </>
    );
};

export default Login;