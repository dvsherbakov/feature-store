import React from 'react';
import {Menu3D} from "../../components";
import {CenterViewContainer} from "../../components/Containers/CenterViewContainer";

const Home = () => {
    return (
        <>
            <CenterViewContainer background={'#434750'}>
                <Menu3D/>
            </CenterViewContainer>
        </>
    );
};

export default Home;