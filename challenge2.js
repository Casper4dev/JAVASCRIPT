//BMI = weight(kg) / (height * height)
let firstname = prompt( `Enter your first name`)
let weight = parseFloat (prompt(`Enter your weight in kg* `));
let height = parseFloat (prompt(`Enter your height in meters*` ));

let height_squared = height * height;
let BMI = weight/ height_squared;
BMI = BMI. toFixed (2);
alert( `Hello ${firstname } Your BMI is ${ BMI} kilogram per meter squared` );