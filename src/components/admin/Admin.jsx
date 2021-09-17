import React from 'react';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import classes from './admin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import Card from "./Card";

let form = {};

class Admin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            description: "",
            image_url: "",

            cardData: [],
            form:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount(){
        const url = 'http://localhost:3000/card';
        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{alert('Ошибка:' + response.status)}
            })
            .then(data => this.setState({cardData: data}))


    }

    handleSubmit(){

        let obj = { ...this.state.form}

        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        };
        fetch("http://localhost:3000/card", option)
            .then(response => response.json);

    }

    handleChange(event){
        form[event.target.id] = event.target.value;

        this.setState({
            form
        });
    }


    render(){
        return(
            <>
                <div id="wrapper" className={classes.wrapper}>
                    <div id="content-wrapper" className="d-flex flex-column">
                            {/* Begin Page Content */}
                            <div className="container-fluid">
                                {/* Page Heading */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-grey-800">Banks</h1>
                                </div>
                                <div>

                                    {
                                        this.state.cardData.map(item => (
                                            <Card key={item.id} data={item}/>
                                        ))
                                    }

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
                                                    <label htmlFor="title">Название банка</label>
                                                    <input id="title" className="form-control mb-2" type="text"/>
                                                    <label htmlFor="description">Описание банка</label>
                                                    <input id="description" className="form-control mb-2" type="text"/>
                                                    <label htmlFor="image_url">Логотип банка</label>
                                                    <input id="image_url" className="form-control" type="text"/>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary">Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 ml-auto">
                                            <button className={classes.addBtn} data-bs-toggle="modal" data-bs-target="#exampleAddModal">add banks</button>

                                        </div>
                                    </div>


                                    {/*ADD MODAL*/}
                                    <div className="modal fade" id="exampleAddModal" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleModalLabel">Редактировать</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                                </div>
                                                <div className="modal-body">
                                                    <label htmlFor="title">Название банка</label>
                                                    <input id="title" className="form-control mb-2" type="text" onChange={this.handleChange}/>
                                                    <label htmlFor="description">Описание банка</label>
                                                    <input id="description" className="form-control mb-2" type="text" onChange={this.handleChange}/>
                                                    <label htmlFor="image_url">Логотип банка</label>
                                                    <input id="image_url" className="form-control" type="text" onChange={this.handleChange}/>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save changes
                                                    </button>
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
export default Admin;