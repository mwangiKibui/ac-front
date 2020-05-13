import React from 'react';

//third-party
import {CardContent,Typography} from '@material-ui/core';
import CountUp from 'react-countup';


const Cards = ({confirmed,recovered,deaths,lastUpdate}) => {
    console.log(`confirmed cases ${confirmed.value}`)
    return (
        <div className='row'>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="covid19Card covid19Card--infected">
                    <CardContent>
                        <Typography className="covid19_heading" gutterBottom>
                        Infected
                        </Typography>
                        <Typography className='covid19_count-up'>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography className="covid19_date">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography className="covid19_text">Number of active cases of covid 19</Typography>
                    </CardContent>
                </div>
            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="covid19Card covid19Card--recovered">
                   <CardContent>
                        <Typography className="covid19_heading" gutterBottom>
                        Recovered
                        </Typography>
                        <Typography className='covid19_count-up'>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography className="covid19_date">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography className="covid19_text">Number of recovered cases of covid 19</Typography>
                    </CardContent>
                </div>
            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="covid19Card covid19Card--deaths">
                   <CardContent>
                        <Typography className="covid19_heading" gutterBottom>
                        Deaths
                        </Typography>
                        <Typography className='covid19_count-up'>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography className="covid19_date">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography className="covid19_text">Number of death cases of covid 19</Typography>
                    </CardContent>
                </div>
            </div>
        </div>
    )
};

export default Cards;