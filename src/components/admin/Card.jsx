import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from "./admin.module.css";

class Cards extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            editId: 0,
            id: 0
        }

        this.id = 1;

        this.handleDelClick = this.handleDelClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this);


    }


    handleDelClick(event) {
        let id = event.target.dataset.id;
        console.log(this.props.data.id)
        let option = {
            method: "delete",
    };
        fetch(`http://localhost:3000/card/${this.props.data.id}`, option);
}

    handleEditClick(event){
        let id = event.target.dataset.id;
        this.id = id;

        const url = `http://localhost:3000/card/${id}`;


        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.querySelector("#title").value = data.title;
                document.querySelector("#description").value = data.description;
                document.querySelector("#image_url").value = data.image_url;
            })
    }

    handleSaveEdit(){
        let editUrl = `http://localhost:3000/card/${this.id}`;
        let elements = document.querySelectorAll(".edit-form input");
        let data = {};
        elements.forEach(item => {
            data[item.name] = item.value;
        })
        fetch(editUrl, {method: "put", headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify(data)})
            .then(response => console.log(response.json()))
            console.log(this.id);
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
                                        <FontAwesomeIcon icon={faTrash} className={`${classes.add} mr-3`}
                                                         data-id={this.props.data.id}
                                                         onClick={this.handleDelClick}

                                        />


                                        {/*EDIT ICON*/}
                                        <FontAwesomeIcon icon={faPen} data-bs-toggle="modal" data-bs-target="#exampleEditModal"
                                                         data-id={this.props.data.id}
                                                         onClick={this.handleEditClick}
                                        />
                                    </div>
                                    {/*EDIT MODAL*/}
                                    <div className="modal fade" id="exampleEditModal" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleEditModalLabel">Редактировать</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                                </div>
                                                <div className="modal-body">
                                                    <form className="edit-form">
                                                        <label htmlFor="title">Название банка</label>
                                                        <input id="title" name="title" className="form-control mb-2" type="text"/>
                                                        <label htmlFor="description">Описание банка</label>
                                                        <input id="description" name="description" className="form-control mb-2" type="text"/>
                                                        <label htmlFor="image_url">Логотип банка</label>
                                                        <input id="image_url" name="image_url" className="form-control" type="text"/>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary" onClick={this.handleSaveEdit}>Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
