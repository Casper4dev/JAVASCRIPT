//declaring numbers
let value = 55;
const dec_value = 55.5555;
const long_value = 1000000000;
const very_long_value = 1_000_000_000;
const expo_value = 10e6;
let neg_value = 0.001;
let very_long_neg_value = 10e6;
console.log(value, dec_value, long_value, very_long_neg_value);


// // // Arithmetic operations
{
    let value = 20;
    const dec_value = 12;
    console.log(value + dec_value);
    console.log(value - dec_value);
    console.log(value * dec_value);
    console.log(value / dec_value);
    console.log(value % dec_value);
}

// // // short hand assignments and notations
{
    let balance = 0;
    let deposit =parseFloat(prompt("Enter amount to deposit"));
    // balance = balance + deposit;
    balance += deposit;
    deposit = parseFloat(prompt("Enter amount to deposit"));
     // balance = balance + deposit;
    balance += deposit;
     alert(`current balance is ${balance}`);
     const withdraw = parseFloat(prompt("Enter amount to withdraw"));
     balance -= withdraw;
     alert(`withdrawal successful \n current balance is ${balance}`);
}


// prefix and postfix variable
{
    let value = 5;
    console.log(++value);
    console.log(value++);
    console.log(value);
}
{
    let x = 3;
    let result = x++ + ++x -2 + x++ + x;
    console.log(result);
}
{
    let x = 2;
    let result = x + x++ - x + ++x;
    console.log(result);
}
{
    let x =3;
    let result = --x + ++x - x + x-- - x;
}

// comparation of numbers
{
    let value_1 = 5;
    let value_2 = 10;
    console.log(value_1 < value_2);
    console.log(value_1 > value_2);
    console.log(value_1 <= value_2);
    console.log(value_1 >= value_2);
    console.log(value_1 == value_2);
    console.log(value_1 === value_2);
    console.log(value_1 !== value_2);
    console.log(value_1 && value_2);
    console.log(value_1 || value_2);
}

// //convert number to string
const age = 55;
const new_age = age.toString();
console.log(new_age);


//formatting numbers
const change =123.5556;
console.log(change.toFixed())
console.log(change.toFixed(2))

//Converting a string to a number
// {
const meaningOfLife = '42.55';
console.log(parseFloat(meaningOfLife));
console.log(parseInt(meaningOfLife));
// }

//Maths modules- Math.round, Math.floor,Math.random, Math.min, Math.max
{
    let value = 555.555555;
    console.log(Math.round(value));
    console.log(Math.floor(value));
    let random = Math.random();
    console.log(random);
    let new_random = Math.round(Math.random() * 6)
}
