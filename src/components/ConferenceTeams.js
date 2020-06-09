import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';

export const ConferenceTeams = ( { Conference, Teams }) => {
    const [open, setOpen] = useState(false);
    // console.log(Teams);
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0"><button onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} className="btn btn-link">{Conference}</button></h5>
            </div>
            <Collapse in={open}>
                <div className="card-body collapse" id="example-collapse-text">
                    {Teams.map(Team => {
                        if (Team.conference === Conference ) { 
                            // console.log(Teams);
                            return (
                                <div>
                                    <Link to={{pathname: '/team/' + Team.team, state: Teams}}>{Team.team}</Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </Collapse>
            
        </div>
    )
}

export default ConferenceTeams;