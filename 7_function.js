
// function registerUser(phone, isPaid){
//     if(isPaid){
//         alert(`user phone number ${phone} registered`);
//     }else{
//     alert(`You can't add phone number until payment has been made`)
// }
// }

// function welcome(){
//     alert(`Welcome ${username}`);

//     let phone = prompt("Enter phone number");
//     let isPaid = false;
//     if(phone == ""){
//         alert("invalid phone number")
//     }else{
//         registerUser(phone, isPaid);
//     }
// }

// const username = prompt("Enter username");



let value_1 = parseFloat(prompt("Enter value"));
let value_2 = parseFloat(prompt("Enter second value"));
let operator = prompt("Enter operator");
let summation = 0;


const sum = (value_1, value_2) => {
    let result = value_1 + value_2;
    return result;
}
if(value_1 == "" || value_2 == "" || operator == ""){
    alert("Please enter valid data");
}else if (operator == "+") {
summation = sum(value_1, value_2);
}else if (operator == "-") {
   minus(value_1, value_2);
}else {
    alert("invalid operator");
}

alert(`Sum is ${summation}`)
/**
 * Challeng:
 * prompt user for email,
 * prompt user for password,
 * call up a function called dashboard,
 * store the email and password inside an object
 * return an information that welcomes the user using the object
 */

