import React from 'react';
import Admin from "./Admin";


class Parent extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            cardData:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/card')
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    alert('Произошла ошибка. Статус ошибки: '+response.status);
                }
            })
            .then(data => this.setState({
                cardData:data
            }))
    }

    render() {
        return(

            this.state.cardData.map( item => <Admin key={item.id} data={item} />)

        )
    }
}
export default Parent;

