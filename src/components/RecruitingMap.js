import React from 'react';
import Plot from 'react-plotly.js';

export const RecruitingMap = (props) => {
    // var updatemenus=[
    //     {
    //         buttons: [
    //             {
    //                 args: ['type', 'surface'],
    //                 label: '3D Surface',
    //                 method: 'restyle'
    //             },
    //             {
    //                 args: ['type', 'heatmap'],
    //                 label:'Heatmap',
    //                 method:'restyle'
    //             }
    //         ],
    //         direction: 'left',
    //         pad: {'r': 10, 't': 10},
    //         showactive: true,
    //         type: 'buttons',
    //         x: 0.1,
    //         xanchor: 'left',
    //         y: 1.1,
    //         yanchor: 'top'
    //     }
    // ];
    

    return (
        <Plot
        className="col-xl-8"
        data={props.data}
        layout={ {
            // width: 700,
            // height: 550,
            title: props.name, 
            geo: {
                scope: 'usa',
                projection: {
                    type: 'albers usa'
                },
                showland: true,
                landcolor: 'rgb(250,250,250)',
                subunitcolor: 'rgb(217,217,217)',
                countrycolor: 'rgb(217,217,217)',
                countrywidth: 1,
                subunitwidth: 1,
                // updatemenus: updatemenus,
            }}
        }
    />
    )
}

export default RecruitingMap;