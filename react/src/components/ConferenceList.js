import React from 'react';
import styled from 'styled-components';
import ConferenceTeams from './ConferenceTeams';
// import { List } from "semantic-ui-react";


export const ConferenceList = ({ Teams }) => {
    const powerFive = ['ACC', 'Big Ten', 'Big 12', 'Pac-12', 'SEC'];
    // console.log(Teams);
    // const [Teams, setTeams] = useState([]);

    return (
        <MainContainer className="container">
            <div className="row justify-content-md-center">
                <div className="col-xl-4" align='center'>
                    <h3>Teams by Conference</h3>
                    
                    <div className="accordion">
                        {powerFive.map(conf => {
                            return <ConferenceTeams Conference={ conf } Teams = { Teams }></ConferenceTeams>
                        })}
                    </div>
                </div>
            </div>
        </MainContainer>
    )
};

export default ConferenceList;

//  STYLED COMPONENTS STYLES
const MainContainer = styled.div`
    button {
        border: none;
    }
    * {
        font-family: college-block;
    }


`
