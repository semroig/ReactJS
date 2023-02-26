import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'


const ComponenteB = ({ contacto, cambiarEstado }) => {
    return (
        <div>
            <p>Nombre: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>Email: { contacto.email }</p>
            <p>Conectado: { contacto.estaConectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</p>

            <button onClick={ cambiarEstado }>Cambiar estado</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    cambiarEstado: PropTypes.func.isRequired
};


export default ComponenteB;