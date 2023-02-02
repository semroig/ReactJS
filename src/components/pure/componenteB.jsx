import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'


const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <p>Nombre: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>Email: { contacto.email }</p>
            <p>Está conectado: { contacto.estaConectado ? 'online' : 'offline' }</p>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
