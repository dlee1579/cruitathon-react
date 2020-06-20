import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Blurb from '../components/Blurb';
import { Graph } from '../components/Graph';
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags';
// import CommentBox from 'react-commentbox';
import Comments from '../components/Comments';
import TeamsList from '../components/Teams.json';


export const Team = (props) => {
    const [Team, setTeam] = useState({});
    const [School, setSchool] = useState({});

    useEffect(() => {
        let url = "https://cruitathon-flask.herokuapp.com/team/" + props.match.params.id;
        fetch(url)
            .then(response => response.json()
            .then(data => {
                setTeam(data);
                // console.log(data);
            })
            );
        ReactGA.initialize("UA-160209262-2");
        ReactGA.pageview(window.location.pathname);
        setSchool(TeamsList.find(element => element["team"] === props.match.params.id));
        // console.log(TeamsList.find(element => element["team"] === props.match.params.id));
    }, [props.match.params.id]);

    // console.log(props);
    // console.log(Team);


    return (
        <div>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <Banner School={School} Team={Team.team_aggregate_stats} Teams={props.location.state}></Banner>
            <div className="container">
                <div className="row">
                    <Blurb School={School} Team={Team.team_aggregate_stats} />
                </div>
                <div className="row">
                    <Graph data={Team.team_position_stats} name={props.match.params.id + " Commits by Position"}/>
                    <Graph data={Team.team_state_stats} name={props.match.params.id + " Commits by Home State"}/>
                    <Graph data={Team.team_competition_stats} name={props.match.params.id + " Commits by Rival Offers"}/>
                </div>
                <div className="row">
                    <Comments team={props.match.params.id} comments={Team.comments_list}></Comments>
                </div>
            </div>
        </div>
    )
}

export default Team;