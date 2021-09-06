import React from 'react';
import styles from './amount.module.css'


class Amount extends React.Component{

    render(){
        return( 
            <div  className='container pt-3 rounded'>
            <div className={`${styles.form}  row p-3`}>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <p className="fw-bold fs-5">Цель кредита</p>
                    <select className="form-select">
                        <option value="1">Просто деньги</option>
                        <option value="2">Покупка автомобиля</option>
                    </select>
                 
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <p className="fw-bold fs-5">Сумма</p>
                    <input className="form-control" type="text" value="100000"
                        aria-label="default input example" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <p className="fw-bold fs-5">Срок кредита</p>
                    <select className="form-select">
                        <option value="1">3 месяца</option>
                        <option value="2">6 месяцев</option>
                        <option value="3">12 месяцев</option>
                        <option value="4">18 месяцев</option>
                        <option value="5">24 месяца</option>
                    </select>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <p className="fw-bold fs-5">Обеспечение</p>
                    <select className="form-select">
                        <option value="1">Без залога</option>
                        <option value="2">Предоставлю залог</option>
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