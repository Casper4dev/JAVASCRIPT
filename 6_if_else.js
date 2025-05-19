//if(condition)  {statement}

const user ={
    username:"John Doe",
    password:"12345",
    email:"john@gmail.com"
}


// const email= prompt("Enter email address");
// if(email == ""){
//     alert("email field is required");
// }else if(email !== user.email){
//     alert("Invalid email address");
// }else{
//     alert(`Welcome ${user.username.toUpperCase()}`)
// }


const value_1 = parseFloat(prompt("Enter first number"));
const value_2 = parseFloat(prompt("Enter second number"));
const operator = prompt("Enter operator");
let result = 0;

if(operator == "+"){
    result = value_1 + value_2;
    alert(`Result is ${result}`);
}else if(operator == "-"){
    result = value_1 - value_2;
    alert(`Result is ${result}`);
}else if(operator == "*"){
    result = value_1 * value_2;
    alert(`Result is ${result}`);
}else if(operator == "/"){
    result = value_1 / value_2;
    alert(`Result is ${result}`);
}else{
    alert("Invalid Operator")
}