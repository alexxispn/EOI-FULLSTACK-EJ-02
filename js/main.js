////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


let validEmails = ['yunior.developer@hotmail.com', 'miguel@mrbug.es', 'imanol@mercadona.com'];
let ejercicio01 = (email) => { return validEmails.includes(email); };


////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


let ejercicio02 = (email) => {
    let message = `El correo ${email} tiene ${email.length} caracteres y en mayúsculas se quedaría así ${email.toUpperCase()}. `;
    let letterM = email.replace(/[^mM]/g, '').length;
    if (letterM === 0) {
        message += `Además el correo no contiene la letra M.`;
    } else if (letterM === 1) {
        message += `Además el correo contiene una letra M.`;
    } else {
        message += `Además el correo contiene ${letterM} letras M.`;
    }
    return message;
}


////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


let ejercicio03 = (email) => {
    let domain = email.split('@')[1];
    let emailWithoutdomain = email.split('@')[0];
    let numbers = email.replace(/[^0-9]/g, '');
    let message = `El correo ${email} pertenece al dominio ${domain} y tiene
    ${emailWithoutdomain.length} caracteres sin contar el dominio ni el @.
    Además, el correo contiene ${numbers.length} números`;
    return message;
}


////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


let ejercicio04 = (user) => {
    let name = user.nombre;
    let age = user.edad;
    let email = user.correo;
    let isAdult = age >= 18;
    let message = `El usuario ${name} ${isAdult ? 'es mayor de edad. ' : 'no es mayor de edad. '}`;
    if (isAdult) {
        message += `Por lo tanto, le he creado un usuario con el correo ${email}`;
    }
    return message;
}


////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


let ejercicio05 = (user) => {
    let name = user.nombre;
    let age = parseInt(user.edad);
    let email = user.correo;
    let checkName = () => { return name === 'Yunior' };
    let checkAge = () => { return age === 30 };
    let checkEmail = () => { return email === 'yunior.developer@hotmail.com' };

    if (checkName() && checkAge() && checkEmail()) {
        return 'La persona introducia es Yunior';
    } if (!(checkName() || checkAge() || checkEmail())) {
        return 'El persona introducida no es Yunior';
    } return `La persona introducia pudiera ser Yunior.`;
}

////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


let ejercicio06 = (user) => {
    let name = user.nombre;
    let age = parseInt(user.edad);
    let email = user.correo;
    let checkNameLength = () => { return (name.length >= 5) && (name.length <= 60) };
    let checkOnlyLettersAndSpaces = () => { return (/^[a-zA-Z\s]*$/.test(name)) };
    let checkEmailLength = () => { return (email.length >= 7) && (email.length <= 60) };
    let checkEmailContainsAt = () => { return (email.includes('@')) };
    let checkEmailContainsContent = () => {
        return (checkEmailContainsAt()) && (email.split('@')[0].length > 0) && (email.split('@')[1].length > 0)
    };
    let checkAge = () => { return age > 5 && age < 150 };
    class check {
        constructor(check, code, text) {
            this.check = check;
            this.code = code;
            this.text = text;
        }
    }
    let arrayCheck = [
        new check(checkNameLength, 'name_invalid_length', `El nombre ${name} debe contener más de 5 caracteres y menos de 60.`),
        new check(checkOnlyLettersAndSpaces, 'name_invalid_letters', `El nombre ${name} solo puede contener letras y espacios.`),
        new check(checkEmailLength, 'email_invalid_min_length', `El correo ${email} debe contener más de 7 caracteres y menos de 60.`),
        new check(checkEmailContainsAt, 'email_invalid_at', `El correo ${email} debe contener un @.`),
        new check(checkEmailContainsContent, 'email_invalid_content', `El correo ${email} debe contener contenido a la izquierda y a la derecha del @.`),
        new check(checkAge, 'age_invalid', `La edad ${age} debe ser superior a 5 y menor de 150.`)
    ];
    let error = [];
    arrayCheck.forEach(element => {
        if (!element.check()) {
            error.push({
                code: element.code,
                text: element.text
            });
        }
    });
    let result = (error.length === 0) ? { valid: true } : { valid: false, errors: error };
    return result;
}


////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


let ejercicio07 = (users) => {
    arrayValidUsers = [];
    arrayInvalidUsers = [];
    users.forEach((user, index) => {
        let result = ejercicio06(user);
        if (result.valid) {
            user.id = index + 1;
            arrayValidUsers.push(user);
        }
        else {
            arrayInvalidUsers.push({
                user: user,
                errors: result.errors
            });
        }
    });
    let result = {
        items_inserted: users.length,
        ids: arrayValidUsers.map(user => user.id),
        with_errors: arrayInvalidUsers,
        users_stored: arrayValidUsers
    };
    return JSON.stringify(result);
}


////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
