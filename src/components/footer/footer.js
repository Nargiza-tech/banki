import React from 'react';

import classes from './footer.module.css'
import logoFooter from './../../Image/logo-footer.svg';
import facebook from './../../Image/facebook.svg'
import instagram from './../../Image/instagram.svg'
import whattsapp from './../../Image/whatsapp.svg'



class Footer extends React.Component{

    render(){
        return(
            <div className={`${classes.footer} p-2`}>
                <div className={classes.footer_container}>
                    <div className="row">
                        <div id="info" className="col-12 col-md-8 text-light">
                            Сервис «Подбор кредита» осуществляет бесплатный поиск выгодных предложений с учетом
                            кредитной истории заемщика. Процентные ставки и срок погашения кредита индивидуальны,
                            зависят от выбранного банка, срок от 3 месяцев.
                        </div>
                        <div className="col-12 col-md-4 text-center mt-1">
                            <a href="#"><img  className={classes.logo} src={logoFooter} alt=""/></a>
                        </div>
                        <div className="col-12 social mt-2 pe-5">
                             <a href="#"><img className={`${classes.img} mx-2`} src={facebook} alt=""/></a>
                            <a href="#"><img className={`${classes.img} mx-2`} src={instagram} alt=""/></a>
                            <a href="#"><img className={`${classes.img} mx-2`} src={whattsapp} alt=""/></a>
                        </div>
                    </div>
                    <div className="fw-bold text-light mt-3">
                        2021 Кыргызстан г. Бишкек
                    </div>
                </div>
            </div>

    )
    }

}

export default Footer;