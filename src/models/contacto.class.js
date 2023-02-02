export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    estaConectado = false;

    constructor(name, lastName, email, isOnline){
        this.nombre = name;
        this.apellido = lastName;
        this.email = email;
        this.estaConectado = isOnline;
    }
}