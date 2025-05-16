//declaring an array of objects
const newData = ["item1", "item 2", 34, false];
console.log(newData);


//Accessing each array elements
console.log(newData[0]);
console.log(newData[2]);
console.log(newData[6]);
newData[6] = "modified";
newData[2] = 40;
console.log(newData);
//Creating an object inside an array
const products =[
    {
        id: 1,
        title: 'new title',
    },
    {
        id: 2,
        title: 'new collection',
    }
]
console.log(products);
console.log(products[0].title)

//ADD and remove arrays
const items =['first', 'second'];
// adding an array
items.push("third");
items.unshift("fourth")

//removing an array
items.shift();
items.pop();

console.log(items)

// const items = ['first', 'second'];

// // //push to the start of the array

// //adding to an empty array
{
    const items = []
    items.push(newData)
}
