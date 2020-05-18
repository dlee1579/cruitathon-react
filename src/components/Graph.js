import React from 'react';
import Plot from 'react-plotly.js';


export const Graph = (props) => {
    // console.log(props);
    // let data = props.data;

    return (
        <div className="col-xl-4">
            <Plot
                data={props.data}
                layout={ {width: 350, height: 450, title: 'A Fancy Plot'} }
            />
        </div>
    )
}
