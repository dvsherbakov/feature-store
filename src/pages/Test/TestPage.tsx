import React from 'react';
import Test from "../../components/Test/Test";
import {CenterViewContainer} from "../../components";

const TestPage = () => {
    return (
        <div>
            <CenterViewContainer background={'#FFFFFF'}>
                <Test/>
            </CenterViewContainer>
        </div>
    );
};

export default TestPage;