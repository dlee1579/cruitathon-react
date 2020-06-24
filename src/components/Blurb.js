import React from 'react'
import styled from 'styled-components';


export const Blurb = ({School, Team}) => {
    // console.log(Team);
    let blurbStyle;
    if (School) {
        blurbStyle = {
            color: School.color_primary,
            background: School.color_secondary
        };
    }
    if (Team) {
        return (
            <MainContainer className="col-xl-6">
                <div className="key_data" style={blurbStyle}>
                    <h2>{Team.team}</h2>
                    <h4>2018-2020 Recruiting Classes</h4>
                    <p>{"# of Commits: " + Team.commit_count}</p>
                    <p>{"Average Commit Score: " + Team.avg_score}</p>
                </div>
            </MainContainer>
        )
    }
    else {
        blurbStyle = {
        };
        return "";
    }
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