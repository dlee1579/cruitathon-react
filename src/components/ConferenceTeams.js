import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';

export const ConferenceTeams = ( { Conference, Teams }) => {
    const [open, setOpen] = useState(false);
    // console.log(Teams);
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="mb-0"><button style={{fontSize: "24px"}} onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} className="btn btn-link">{Conference}</button></h3>
            </div>
            <Collapse in={open}>
                <div className="card-body collapse" id="example-collapse-text">
                    {Teams.filter(Team => Team["conference"] === Conference).map(Team => {
                            // console.log(Teams);
                            return (
                                <div>
                                    <Link style={{fontSize: "24px"}} to={{pathname: '/team/' + Team.team, Teams: Team}} Team={Team}>{Team.team}</Link>
                                </div>
                            )
                    })}
                    {/* {Teams.map(Team => {
                        if (Team.conference === Conference ) { 
                            // console.log(Teams);
                            return (
                                <div>
                                    <Link to={{pathname: '/team/' + Team.team, Teams: Team}} Team={Team}>{Team.team}</Link>
                                </div>
                            )
                        }
                    })} */}
                </div>
            </Collapse>
            
        </div>
    )
}

export default ConferenceTeams;