import React from 'react';
import classes from  './bankiList.module.css'
// import '../Image'

class BankList extends React.Component {
    render() {
        return (
           
                <div className={`${classes.container_fon} d-flex text-center text-white bg-dark`}>
                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                        <main  className={`${classes.credits} px-3`}>
                            <h1>Мастер подбора кредитов</h1>
                            <p className="fs-5">Персональный подбор кредита на любые цели и отправка заявки в банк</p>
                            <button className="btn btn-outline-light" onClick="document.getElementById('container').scrollIntoView();">Подобрать</button>
                        </main>
                    </div>
                </div>
            
        )
    }
}

export default BankList;