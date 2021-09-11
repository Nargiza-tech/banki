import React from 'react';
import classes from './partners.module.css';
import optima from '..///../Image/optima.jpg';
import bank from '..///../Image/bank-logo.png';

class Partners extends React.Component{
    render(){
        return(
            <div id="container-for-bank" className={`${classes.container_for_bank} container px-4 py-5`}>
                <h2 className="pb-3 text-center border-bottom fw-bold">Банки партнеры</h2>
                <div className="row text-center">
                    <div className="col-12 col-sm-6 col-md-4">
                        <img className="m-3" src={optima} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <img className="m-3" src={bank} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <img className="m-3" src={optima} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;