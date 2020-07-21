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
import Button from 'react-bootstrap/Button';
import {RecruitingMap} from '../components/RecruitingMap';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


export const Team = (props) => {
    const [Team, setTeam] = useState({});
    const [School, setSchool] = useState({});
    const [year, setYear] = useState(2020);
    const [mapType, setMapType] = useState('state');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = "https://cruitathon-flask.herokuapp.com/team/" + props.match.params.id + "/" + year;
        // let url = "http://127.0.0.1:5000/team/" + props.match.params.id + "/" + year;
        fetch(url)
            .then(response => response.json()
            .then(data => {
                setTeam(data);
                // console.log(data);
                // console.log(Team);
                setLoading(false);
            })
            );
        ReactGA.initialize("UA-160209262-2");
        ReactGA.pageview(window.location.pathname);
        setSchool(TeamsList.find(element => element["team"] === props.match.params.id));

        // console.log(Team);
        // console.log(TeamsList.find(element => element["team"] === props.match.params.id));
    // }, [props.match.params.id]);
    }, [props.match.url, props.match.params.id, year]);
    
    const showMap = (Team, props) => {
        if (mapType === 'state'){
            return (
                <RecruitingMap data={Team.team_state_stats} name={props.match.params.id + " Commits by Home State"}/>
            )
        }
        else {
            return (
                <RecruitingMap data={Team.team_hometown_stats} name={props.match.params.id + " Commits by Geographic Location"}></RecruitingMap>
            )
        }
    }
    const loadPage = () => {
        if (loading) {
            return (
                <Row style={{justifyContent: 'center'}} className="justify-content-md-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Row>
            )
        }
    }

    return (
        <div>
            <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <Banner School={School} Team={Team.team_aggregate_stats} Teams={props.location.state}></Banner>
            {loadPage()}
            {/* <div>{School.city + ", " + School.state}</div> */}

            {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
            <div className="container">
                <DropdownButton id="dropdown-basic-button" size='lg' title={year} onClick={(e)=>{
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
                <Row className="justify-content-md-center">
                    <Graph data={Team.team_position_stats} name={props.match.params.id + " Commits by Position"}/>
                    {/* <Graph data={Team.team_state_stats} name={props.match.params.id + " Commits by Home State"}/> */}
                    <Graph data={Team.team_competition_stats} name={props.match.params.id + " Commits by Rival Offers"}/>
                </Row>
                <Row>
                    <Button variant="secondary" value="state" onClick={(e)=> setMapType(e.target.value)} size='lg'>State View</Button>
                    <Button variant="dark" value="geo" onClick={(e)=> setMapType(e.target.value)} size='lg'>Nation View</Button>
                </Row>
                {/* <h3>{mapType}</h3> */}
                    {/* <Graph data={Team.team_hometown_stats} name={props.match.params.id + " Commits by Geographic Location"}/> */}
                <Row className="justify-content-md-center">
                    {showMap(Team, props)}
                </Row>
                {/* <RecruitingMap style={{display: 'none'}} data={Team.team_hometown_stats} name={props.match.params.id + " Commits by Geographic Location"}></RecruitingMap> */}

                <div className="row">
                    <Comments team={props.match.params.id} comments={Team.comments_list} location={School.city + ", " + School.state}></Comments>
                </div>
            </div>
        </div>
    )
}

export default Team;