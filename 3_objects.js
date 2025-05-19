//declaring objects
const user = {
    username : "John doe",
    email : "John@gmail.com",
    age : 55,
    paid : false
}
console.log(user);
//Accessing each objects properties
console.log(user.username);
console.log(user.email);
user.age = 56;
user.occupation ="web developer";
console.log(user);

const school = {
    ...user,
    name:"HIIT",
    course: "web design",
}
console.log(school);

const newData ={
    "id" : 1,
    "name": "Jane Doe",
    "age" : 25,
}

console.log(newData);

// //Structuring Objects
const make ='Ford';
const model ='Mustang';
const color = 'White'

// const car ={
//     make: make,
//     model : model,
//     color: color
// }
const car ={make, model, color};
console.log(make, model, color)
const product={
    id:1,
    title: "new collection",
    img :"",
    descrioption : "This is a description",
    initial_price: 3000,
    price: 2500,
    quantity:50,
    isOutOfOrder: false,
    size: 34,
    color: "blue",
}

const {id, title, img, initial_price, price} = product;
console.log(id, title, img, initial_price, price);

// //delete an object
const bird = {
    name: 'chicken',
    status: 'female'
}

// delete bird.status;
// console.log(bird);