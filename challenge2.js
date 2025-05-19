//BMI = weight(kg) / (height * height)
let firstname = prompt( `Enter your first name`)
let weight = parseFloat (prompt(`Enter your weight in kg* `));
let height = parseFloat (prompt(`Enter your height in meters*` ));

let height_squared = height * height;
let BMI = weight/ height_squared;
BMI = BMI. toFixed (2);
alert( `Hello ${firstname } Your BMI is ${ BMI} kilogram per meter squared` );


if(BMI < 18.5){
    alert("You are Underweight \n You need to eat more");
}else if(BMI <= 24.9){
    alert("Your weight is normal \n KEEP IT UP!");
}else if(BMI <= 29.9){
    alert("You are Overweight \n You need to cut your diet a little");
}else if(BMI <= 34.9){
    alert("Obesity (Class I) \n You need to cut your");
}else if(BMI <= 39.9){
    alert("Obesity (Class II) \n Take it easy on yourself");
}
else (BMI >= 40) 
    alert("Obesity (Class III) \n You need to take care of yourself");
