import React from 'react';
import {CenterViewContainer, SimplePercentCard} from "../../components";

const TestPage = () => {
    return (
        <div>
            <CenterViewContainer background={'#CFD1E1'}>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <SimplePercentCard text={'Trajectories'} pc={78}/>
                    <SimplePercentCard text={'Plan'} pc={43}/>
                    <SimplePercentCard text={'Points'} pc={66}/>
                    <SimplePercentCard text={'Interferometry'} pc={21}/>
                    <SimplePercentCard text={'Constructions'} pc={100}/>
                    <SimplePercentCard text={'Equipment'} pc={47}/>
                </div>
            </CenterViewContainer>
        </div>
    );
};

export default TestPage;