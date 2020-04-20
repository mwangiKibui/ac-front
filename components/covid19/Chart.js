import React from 'react';
//third-party
import {Bar} from 'react-chartjs-2';

const Chart = ({confirmed,recovered,deaths,country}) => {
    const barChart  = (
            <Bar 
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0,0,255,1)','rgba(0,255,0,1)','rgba(255,0,0,1)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`,fontColor:'#fff'}
            }}
            />
        );

    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
            {barChart}
            </div>
        </div>
    );

};

export default Chart;