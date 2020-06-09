import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Blurb from '../components/Blurb';
import { Graph } from '../components/Graph';


export const Team = (props) => {
    const [Team, setTeam] = useState({});

    useEffect(() => {
        let url = "https://cruitathon-flask.herokuapp.com/team/" + props.match.params.id;
        fetch(url)
            .then(response => response.json()
            .then(data => {
                setTeam(data);
                // console.log(data);
            })
            );
    }, [props.match.params.id]);

    // console.log(props);
    // console.log(Team);

    return (
        <div>
            <Banner Team={Team.team_aggregate_stats} Teams={props.location.state}></Banner>
            <div className="container">
                <div className="row">
                    <Blurb Team={Team.team_aggregate_stats} />
                </div>
                <div className="row">
                    <Graph data={Team.team_position_stats} name={props.match.params.id + " Commits by Position"}/>
                    <Graph data={Team.team_state_stats} name={props.match.params.id + " Commits by Home State"}/>
                    <Graph data={Team.team_competition_stats} name={props.match.params.id + " Commits by Rival Offers"}/>
                </div>
            </div>
        </div>
    )
}

export default Team;