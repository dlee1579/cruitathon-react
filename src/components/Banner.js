import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export const Banner = ({Team, Teams}) => {
    let bannerStyle;
    // console.log(Teams);
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
            <Link to= "/"><h1 style={bannerStyle}>Cruitathon</h1></Link>
            <p style={bannerStyle}>Using College Football data visualizations to prove that my team is better than yours</p>
            <SearchBar Teams= {Teams} />
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