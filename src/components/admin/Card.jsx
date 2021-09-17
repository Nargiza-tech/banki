import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from "./admin.module.css";

class Cards extends  React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)

    }

    render(){
        return(<>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body p-3">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className='float-end'>
                                        {/*DELETE ICON*/}
                                        <FontAwesomeIcon icon={faTrash} className={`${classes.add} mr-3`}/>


                                        {/*EDIT ICON*/}
                                        <FontAwesomeIcon icon={faPen} data-bs-toggle="modal" data-bs-target="#exampleEditModal"/>
                                    </div>
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"></div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 m-5">
                                        {this.props.data.title}<br/>
                                      {this.props.data.image_url}<br/>
                                      {this.props.data.description}<br/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</>
        )
    }
}

export default Cards;
