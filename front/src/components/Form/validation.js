//? VALIDATION MODIFICA EL ESTADO, NO TIENE QUE RETORNAR NADA

const validation = (userData, errors, setErrors ) => {
    //!validacion username

    if (!userData.username) {
        setErrors({...errors, username:"Por favor completa este campo"});
    }

    else if(userData.username.length > 35) {
        setErrors({...errors, username:"No puede superar los 35 caracteres"});
    }

    // Acá usamos un REGEX para validar si es un mail
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)){
        setErrors({...errors, username:"Email inválido"});
    }

    // Esto es por si no hay ningún error, también tiene que mostrar algo (o no mostrar nada, en este caso)
    else {
        setErrors({...errors, username:""});
    }

    //! validacion password

    if(userData.password.length < 6 || userData.password.length > 10 ){
        setErrors({...errors, password:"Longitud inválida"});
    } else if (!/\d/.test(userData.password)) {
        setErrors({...errors, password:"Debe contener al menos un número"});
    } else {
        setErrors({...errors, password:""});
    }

};

export default validation;