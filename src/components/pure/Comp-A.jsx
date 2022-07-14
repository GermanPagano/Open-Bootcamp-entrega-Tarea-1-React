import React, { Component } from 'react';
import CompB from './Comp-B';


class CompA extends Component {
    constructor(props){
        super(props);
            this.nombre = 'German';
            this.apellido = 'Pagano';
            this.email = 'example@email.com';
            this.conectado = false;
    };
    render() {
        return (
            <div>
            <CompB 
            nombre={this.nombre}
            apellido={this.apellido}
            email={this.email}
            conectado={this.conectado}
            ></CompB>
            </div>
        );
    }
}
export default CompA;
