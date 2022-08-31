function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const diplayPinField = document.getElementById('display-pin');
    diplayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        

        // jodi ami last theke ekta ekta kore katte chai tahole nicher ei condition ta use hobe
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigit = digits.joint('');
            typeNumberField.value = remainingDigit;
        }
        
        
    }
    else{
        
        // const previousTypeNumber = typeNumberField.value;
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinFleid = document.getElementById('display-pin');
    const currentPin = displayPinFleid.value;

    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;

    const pinSuccessMassage = document.getElementById('pin-success');
    const pinUnsuccessMassage = document.getElementById('pin-failur');
    
    if(typeNumber === currentPin){
        
        pinSuccessMassage.style.display = 'block';
        pinUnsuccessMassage.style.display = 'none';
    }
    
    else {
        
        pinUnsuccessMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
    
})