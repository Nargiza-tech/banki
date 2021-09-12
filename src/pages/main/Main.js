import React from "react";
import Header from '../../components/header/Header';
import BankList from '../../components/bankList/BankList';
import Footer from "../../components/footer/footer";
import Amount from '../../components/amount/Amount';
import Service from '../../components/service/Service';
import Partners from '../../components/partners/Partners';

class Main extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <BankList/>
                <Amount/>
                <Service/>
                <Partners/>
                <Footer/>
            </>
        )
    }
}

export default Main;