import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Blurb from '../components/Blurb';
import { Graph } from '../components/Graph';


export const Team = (props) => {
    const [Team, setTeam] = useState({});

    useEffect(() => {
        let url = "http://localhost:5000/team/" + props.match.params.id;
        fetch(url)
            .then(response => response.json()
            .then(data => {
                setTeam(data);
                // console.log(data);
            })
            );
    }, []);

    return (
        <div>
            <Banner Team={Team.team_aggregate_stats}></Banner>
            <div className="container">
                <div className="row">
                    <Blurb Team={Team.team_aggregate_stats} />
                </div>
                <div className="row">
                    <Graph data={Team.team_position_stats}/>
                    <Graph data={Team.team_state_stats}/>
                    <Graph data={Team.team_competition_stats}/>
                </div>
            </div>
        </div>
    )
}

export default Team;