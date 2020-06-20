import React from 'react';
import styled from 'styled-components';
import ConferenceTeams from './ConferenceTeams';
// import { List } from "semantic-ui-react";


export const ConferenceList = ({ Teams }, props) => {
    const conferenceNames = ['ACC', 'Big Ten', 'Big 12', 'Pac-12', 'SEC', 'C-USA', 'AAC', 'Sun Belt', 'MWC', 'MAC', 'Ind'];
    // console.log(props);
    // const [Teams, setTeams] = useState([]);
    // console.log(Teams);

    return (
        <MainContainer className="container">
            <div className="row justify-content-md-center">
                <div className="col-xl-4" align='center'>
                    <h2>Teams by Conference</h2>
                    
                    <div className="accordion">
                        {conferenceNames.map(conf => {
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
