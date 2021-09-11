import React from 'react';
import classes from './service.module.css';
import newFile from '..//.//./../Image/new-file.png';
import bank from '..//.//./../Image/bank.png';
import choice from '..//.//./../Image/choice.png';
import finance from '..//.//./../Image/finance.png';

class Service extends React.Component{
    render(){
        return(
            <div id='container' className={`${classes.container} container`}>
                <h2 className="pb-3 m-5 text-center border-bottom fw-bold">Как работает сервис</h2>
                <div className="row text-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <img className="m-3" src={newFile} alt="" />
                        <p>Вы заполняете единую анкету – нужно всего 3 минуты</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <img className="m-3" src={bank} alt="" />
                        <p>Мы бесплатно подберем банки, которые с наибольшей вероятностью одобрят вам
                            кредит</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <img className="m-3" src={choice} alt="" />
                        <p>Вы выбираете предложения, отправляете заявки и получаете решение онлайн</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <img className="m-3" src={finance} alt="" />
                        <p>Получаете кредит и экономите на процентах</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;