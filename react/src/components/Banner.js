import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = ({Team}) => {
    let bannerStyle;
    // console.log(Team);
    if (Team) {
        bannerStyle = {
            color: Team.color_secondary,
            background: Team.color_primary
        }
    }
    else {
        bannerStyle = {
        }
    }
    return (
        <MainContainer className="jumbotron text-center" style={bannerStyle}>
            <Link to= "/home"><h1 style={bannerStyle}>Cruitathon</h1></Link>
            <p style={bannerStyle}>Using College Football data visualizations to prove that my team is better than yours</p>
            <div className="row justify-content-center text-center">
                <input type="text" id='teamInput' placeholder='Team Name' className="form-control form-control-lg text-center"/>
                <div id="search_results">
                    <ul id="teamList">

                    </ul>
                </div>
            </div>
        </MainContainer>
    )
}

export default Banner;

//  STYLED COMPONENTS STYLES
const MainContainer = styled.div`
    background: var(--home-blue);
    
    * {
        font-family: college-block;
        color: var(--home-yellow);
    }

`