import React from 'react';
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {

    const defaultContacto = new Contacto(
        'Carlos', 'Perez', 'carlosperez@mail.com', true
    )

    return (
        <div>
            <h2>
                Your contact:
            </h2>
            <ComponenteB contacto={ defaultContacto } ></ComponenteB>
        </div>
    );
};


export default ComponenteA;