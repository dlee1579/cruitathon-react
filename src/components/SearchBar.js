import React, { useState, useEffect } from 'react';
// import useStateWithCallback from 'use-state-with-callback';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import teamsList from './Teams.json';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';

export const SearchBar = (props) => {
    const liststyle = {
        // display: 'None',
        color: 'Black',
        liststyletype: 'None'
    };

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([], searchResults => {
    });
    
    useEffect(() => {
        if (search === '') {
            setSearchResults([]);
        }
        else {
            const results = teamsList.filter((team) => team.team.toLowerCase().includes(search));
            setSearchResults(results);
        }
    }, [search]);

    const handleChange = event => {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <div className="row justify-content-center text-center">
            <input type="text" onChange={handleChange} id='teamInput' placeholder='Team Name' value={search} className="form-control form-control-lg text-center"/>
            {/* <InputGroup>
                <FormControl placeholder="Team Name" />
            </InputGroup> */}
            <div id="search_results">
                {searchResults.map(item => {
                    return (
                        <div className="list-group-item list-group-item-action justify-content-between">
                            <Link style={liststyle} onClick={() => setSearch('')} to={{pathname: '/team/' + item.team, state: item}}>{item.team}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBar;