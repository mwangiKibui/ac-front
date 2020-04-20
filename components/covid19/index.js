//react
import React,{Component} from 'react';
//third-party
import {ClipLoader} from 'react-spinners';
import {connect} from 'react-redux';
//core-components
import Cards from './Cards';
import Chart from './Chart';
import SelectCountry from './SelectCountry';
import {fetchData} from '../../store/covid19';

class Covid19 extends Component{
    state = {
        recovered:this.props.recovered,
        confirmed:this.props.confirmed,
        deaths:this.props.deaths,
        lastUpdate:this.props.lastUpdate,
        countries:this.props.countries,
        loading:false,
        country:''
    };
    componentDidUpdate(prevProps){
        if(this.props.recovered !== prevProps.recovered){
            this.setState({recovered:this.props.recovered})
        };
        if(this.props.confirmed !== prevProps.confirmed){
            this.setState({confirmed:this.props.confirmed});
        };
        if(this.props.deaths !== prevProps.deaths){
            this.setState({deaths:this.props.deaths});
        };
    };

    handleCountryChange = async (country) => {
        this.setState({loading:true});
        await this.props.fetchData(country).then(() => {
            //we have the data
            return this.setState({
                recovered:this.props.recovered,confirmed:this.props.recovered,
                deaths:this.props.deaths,loading:false,country
            })
        }).catch(console.log);
    };

    render(){
        return (
            <>
            {
               this.state.loading ? (
                   <div className="text-center" style={{width:'100%'}}>
                       <ClipLoader size={30} color="#009933" />
                   </div>
               ) : (
                   <>

                       {/** we start off with cards */}
                       <section className="cards">
                       <Cards confirmed={this.state.confirmed} recovered={this.state.recovered} 
                        deaths={this.state.deaths} lastUpdate={this.state.lastUpdate} />
                       </section>
                       <section className="selectCountry">
                       <SelectCountry countries={this.state.countries} country={this.state.country} 
                       handleCountryChange={this.handleCountryChange}/>
                       </section>                       
                       {
                           this.state.country ? (
                               <section className="chart">
                                <Chart 
                                country={this.state.country}
                                confirmed={this.state.confirmed}
                                recovered={this.state.recovered}
                                deaths={this.state.deaths}
                                /> 
                               </section>
                           ) : null                           
                       }
                   </>
               )
           }
            </>
        )
    }

};

const mapToProps = state => ({
    recovered:state.covid19.recovered,
    confirmed:state.covid19.confirmed,
    deaths:state.covid19.deaths,
    lastUpdate:state.covid19.last_update,
    countries:state.covid19.countries
});
const dispatchToProps = {
    fetchData
};

export default connect(mapToProps,dispatchToProps)(Covid19)