import React from 'react';
import {CenterViewContainer} from "../../components";
import {NeonContainer} from "../../components/Text/Neon/NeonContainer";

export const NeonPage = () => {
    return (
        <>
            <CenterViewContainer background={'#000'}>
                <NeonContainer text={'Привет'} size={255}/>
            </CenterViewContainer>
        </>
    );
};
