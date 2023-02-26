import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {

    let defaultContacto = new Contacto(
        'Carlos', 'Perez', 'carlosperez@mail.com', true
    );

    const [contacto, changeContacto] = useState(defaultContacto);

    const cambiarEstado = () => {
        
        let tempContacto = new Contacto(
            contacto.nombre,
            contacto.apellido,
            contacto.email,
            !contacto.estaConectado
        );

        changeContacto(tempContacto);
    }

    return (
        <div>
            <h2>
                Your contact:
            </h2>
            <ComponenteB contacto={ contacto } cambiarEstado={ cambiarEstado }></ComponenteB>
        </div>
    );
};


export default ComponenteA;