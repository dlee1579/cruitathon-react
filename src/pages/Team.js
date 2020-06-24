import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Blurb from '../components/Blurb';
import { Graph } from '../components/Graph';
import ReactGA from 'react-ga';
import MetaTags from 'react-meta-tags';
// import CommentBox from 'react-commentbox';
import Comments from '../components/Comments';
import TeamsList from '../components/Teams.json';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


export const Team = (props) => {
    const [Team, setTeam] = useState({});
    const [School, setSchool] = useState({});
    const [year, setYear] = useState(2020)

    useEffect(() => {
        let url = "https://cruitathon-flask.herokuapp.com/team/" + props.match.params.id + "/" + year;
        fetch(url)
            .then(response => response.json()
            .then(data => {
                setTeam(data);
                console.log(props);
            })
            );
        ReactGA.initialize("UA-160209262-2");
        ReactGA.pageview(window.location.pathname);
        setSchool(TeamsList.find(element => element["team"] === props.match.params.id));
        // console.log(props.search);
        // console.log(TeamsList.find(element => element["team"] === props.match.params.id));
    // }, [props.match.params.id]);
    }, [props.match.url, year]);
    // console.log(props.search);

    // useEffect(()=> {

    // }, [year])

    // console.log(props);
    // console.log(Team);


    return (
        <div>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <Banner School={School} Team={Team.team_aggregate_stats} Teams={props.location.state}></Banner>
            <div className="container">
            <DropdownButton id="dropdown-basic-button" size='sm' title={year} onClick={(e)=>{
                setYear(e.target.text);
                // console.log(e.target.text);
                console.log(props.match.params.id);
                // e.preventDefault();
                // e.target.text = year;
                // fetch call to flask api for updated result set by year
                }}>
                {[2020, 2019, 2018, "all"].map((year) => {
                    return <Dropdown.Item>{year}</Dropdown.Item>
                })}
            </DropdownButton>
                <div className="row">
                    <Blurb School={School} Team={Team.team_aggregate_stats} Year = {year}/>
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