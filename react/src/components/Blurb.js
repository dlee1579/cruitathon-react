import React from 'react'
import styled from 'styled-components';


export const Blurb = ({Team}) => {
    const blurbStyle = {
        color: Team.color_primary,
        background: Team.color_secondary
    }
    return (
        <MainContainer className="col-xl-6">
            <div className="key_data" style={blurbStyle}>
                <h2>{"Team Name: " + Team.team}</h2>
                <p>{"# of Commits: " + Team.commit_count}</p>
                <p>{"Average Commit Score: " + Team.avg_score}</p>
            </div>
        </MainContainer>
    )
}

export default Blurb;

const MainContainer = styled.div`

    .key_data {
        border-radius: 10px;
        padding: 20px;
        font-weight: bold;
        font-family: college-block;
    }

`

//         background: var(--home-yellow);
//         color: var(--home-blue);