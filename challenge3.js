let email = prompt(`Enter a valid email`);
let password = prompt(`Enter password`);
let USER = { email : email,
             password : password};

function dashboard(){
    return `Welcome ${USER.email}`;
}

alert(dashboard())