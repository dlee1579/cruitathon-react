import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ConferenceList from '../components/ConferenceList';
// import SearchBar from "react-native-dynamic-search-bar";
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags';
import TeamsList from '../components/Teams.json';


export const Home = () => {

    const [Teams, setTeams] = useState([]);

    useEffect(() => {
        // fetch("https://cruitathon-flask.herokuapp.com/")
        //     .then(response => response.json()
        //     .then(data => {
        //         setTeams(data);
        //         // console.log(data);
        //     })
        //     );
        setTeams(TeamsList);
        // console.log(TeamsList);
        ReactGA.initialize("UA-160209262-2");
        ReactGA.pageview(window.location.pathname);
    }, []);
    
    return (
        <div>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <Banner Teams = {Teams}></Banner>
            <ConferenceList Teams = {Teams}></ConferenceList>
        </div>
    )
}

export default Home;