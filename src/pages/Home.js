import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ConferenceList from '../components/ConferenceList';


export const Home = () => {

    const [Teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("http://cruitathon-flask.herokuapp.com/")
            .then(response => response.json()
            .then(data => {
                setTeams(data);
                // console.log(data);
            })
            );
    }, []);

    
    
    return (
        <div>
            <Banner Teams = {Teams}></Banner>
            <ConferenceList Teams = {Teams}></ConferenceList>
        </div>
    )
}

export default Home;