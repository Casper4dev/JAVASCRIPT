//declaring a string
let user1 = "John Doe";
let user2 = "Jane Doe"
let date_of_birth="";
console.log(user1, user2, date_of_birth)
console.log(typeof(user2));


const notification ="Your payment has\n been \t 'received'";
console.log(notification);
// String Behaviours-uppercase strings and lowercase case strings
let person = 'Mr John Does it';
console.log(person.toUpperCase());
console.log(person.toLowerCase());
console.log(person.length);
console.log(person[1]);
console.log(person.slice(7, -1))

// // Accessing the number of characters in the string
const firstName = "John";
const lastName ="Doe";

let message = "Welcome " + firstName + lastName;
console.log(message);
console.log(message.length);


// // Template literals makes multiline strings and string concatenation much easier
const info =`This "is" a 'content'`
const new_message =`Welcome ${firstName} ${lastName}`;
console.log(new_message)
// const title = 'Mr';
// const name = 'Burns';
// const message_2 = `His name is ${title} ${name}`;
// console.log(message_2)

// let firstName = 'chuks';
// let lastName = 'Mike';
// let items = 11;

// Formatting strings using trim methods

const whiteSpace = "\t     hello world   \n";
const email="\t    tomiwaap@gmail.com    \n"
console.log(whiteSpace.trimStart());
console.log(email.trimEnd())
