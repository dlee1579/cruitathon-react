import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Banner = ({Team, Teams, School}) => {
    let bannerStyle;
    // console.log(School);
    if (School) {
        bannerStyle = {
            color: School.color_secondary,
            background: School.color_primary
        }
    }
    else {
        bannerStyle = {
            color: "#FFC300",
            background: "#1F618D"
        }
    }
    return (
        // <MainContainer className="jumbotron text-center" style={bannerStyle}>
        //     <Link to= "/"><h1 style={bannerStyle}>Cruitathon</h1></Link>
        //     <p style={bannerStyle}>Using College Football recruiting data to prove that my team is better than yours</p>
        //     <SearchBar Teams= {Teams} />
        // </MainContainer>
        <MainContainer>
            <Jumbotron className="jumbotron text-center" style={bannerStyle}>
                <Link to= "/"><h1 style={bannerStyle}>Cruitathon</h1></Link>
                <p style={bannerStyle}>Using College Football recruiting data to prove that my team is better than yours</p>
                <SearchBar Teams= {Teams} />
            </Jumbotron>
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