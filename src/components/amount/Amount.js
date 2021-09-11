import React from 'react';
import styles from './amount.module.css';


class Amount extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            goals: [],
            oneGoal:{}, 
            time:[],
            test: []
        }

        this.choose = this.choose.bind(this)
    }

    componentDidMount() {
        this.getProducts();
    }

    choose(event){
          let id = event.target.value;
          this.state.goals.forEach(data =>{
              if(data.id == id){
                  console.log('test')
                  this.setState({
                      oneGoal: data,
                      time: data.time,
                      test: data.surety
                  })
              }
          })
    }

    getProducts() {
        let url = "http://localhost:3001/products";

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({goals: data})
        })
    }

    render(){
        return( 
            <div  className='container pt-3 rounded'>
                <div className={`${styles.form}  row p-3`}>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p className="fw-bold fs-5">Цель кредита</p>
                        <select onChange={this.choose} className="form-select">
                            {
                                this.state.goals.map(data=>(
                                    <option value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p className="fw-bold fs-5">Сумма</p>
                        <input className="form-control" type="number" min={this.state.oneGoal.minSumm} max={this.state.oneGoal.maxSumm}
                            aria-label="default input example" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p className="fw-bold fs-5">Срок кредита</p>
                        <select className="form-select">
                            {
                                this.state.time.map(current=>(
                                    <option value={current}>{current}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p className="fw-bold fs-5">Обеспечение</p>
                        <select className="form-select">
                            {
                                this.state.test.map(prevent=>(
                                    <option value={prevent}>{prevent}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="row p-3">
                        <div className="col text-center">
                            <button id="credit" className={`${styles.credit} btn p-2`}>Подобрать кредит</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Amount;