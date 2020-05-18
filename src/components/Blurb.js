import React from 'react'
import styled from 'styled-components';


export const Blurb = (props) => {
    console.log(props.Team);
    let blurbStyle;
    if (props.Team) {
        blurbStyle = {
            color: props.Team.color_primary,
            background: props.Team.color_secondary
        };

        return (
            <MainContainer className="col-xl-6">
                <div className="key_data" style={blurbStyle}>
                    <h2>{"Team Name: " + props.Team.team}</h2>
                    <p>{"# of Commits: " + props.Team.commit_count}</p>
                    <p>{"Average Commit Score: " + props.Team.avg_score}</p>
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