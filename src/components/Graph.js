import React from 'react';
import Plot from 'react-plotly.js';


export const Graph = (props) => {
    // if (props.data) {
    //     console.log(props.data[0]);
    // }
    // props.data && props.data[0];
    // let data = props.data;

    return (
        <div 
        // className="col-xl-4"
        >
            <Plot
                data={props.data}
                layout={ {width: 450, height: 550, title: props.name, 
                    geo: {
                        scope: 'usa',
                        projection: {
                            type: 'albers usa'
                        },
                        showland: true,
                        landcolor: 'rgb(250,250,250)',
                        subunitcolor: 'rgb(217,217,217)',
                        countrycolor: 'rgb(217,217,217)',
                        countrywidth: 0.5,
                        subunitwidth: 0.5
                    }} }
            />
        </div>
    )
}
