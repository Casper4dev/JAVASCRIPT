const submit = document.querySelector(".submit");
const height =  document.querySelector(".height");
const weight= document.querySelector(".weight");

const weight_err  = document.querySelector(".weight_err");
const height_err = document.querySelector(".height_err");
const isValid = true;


submit.addEventListener("click",(event)=>{
    //validate form
    event.preventDefault
    if(weight.value == ''){
        weight_err.textContent =  "Weight field is required";
        isValid = false;
    }
    if(isNaN(weight.value)){
        weight_err.textContent =  "Weight requires a number";
        isValid = false;
    }
    if((weight.value).length > 4){
        weight_err.textContent =  "Weight requires not more than 3  digits";
        isValid = false;
    }
    
    if(height.value == ''){
        height_err.textContent =  "Height field is required";
        isValid = false;
    }
    if(isNaN(height.value)){
        height_err.textContent =  "Height requires a number";
        isValid = false;
    }
    if((height.value).length > 4){
        height_err.textContent =  "Height requires not more than 3  digits";
        isValid = false;
    }
    if(parseFloat(height.value <= 4) && parseFloat(weight.value <=4)){
        isValid = true;
        
    }
    if(isValid){
        let bmi =( weight.value / (height.value ** 2)).toFixed(2);
        document.querySelector('.result').textContent = bmi;
        weight.value = '';
        height.value =  '';
        weight_err.textContent =  " ";
        height_err.textContent =  " ";
        let bodyState = document.querySelector(".body-state");

        if(bmi < 18.5){
            bodyState.innerHTML = "You are underweight.\n Please eat more."
        }
        else if(bmi <= 24.9){
            bodyState.innerHTML=`
                Your weight is normal.\n Keep it up.`
            bodyState.style.color = "green"
        }
        else if(bmi <= 29.9){
            bodyState.innerHTML = `
                Your are overweight\n
                watch what you're eating`
            bodyState.style.color = "blue"
        }
        else if (bmi <= 34.9){
            bodyState.innerHTML = `
                Your are obese\n
                Please start dieting`
             bodyState.style.color = "red"
        
        }
        else if (bmi <= 39.9){
            bodyState.innerHTML = `
                Your are obese\n
                Please start working on your diet`
            bodyState.style.color = "red"
        }
        else {
            bodyState.innerHTML = `
                Your are obese\n
                Please start dieting and working out`
                bodyState.style.color = "red"
        }
        }

    }


    
)