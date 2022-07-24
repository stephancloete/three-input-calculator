function returnInput(){
    let numberOne = document.getElementById("inputOne").value;
    numberOne = parseInt(numberOne);
    let numberTwo = document.getElementById("inputTwo").value;
    numberTwo = parseInt(numberTwo);
    let operator = document.querySelector("input[type='radio'][name=selectOperator]:checked").value;
    

    if(operator == "+"){
        let answer = numberOne + numberTwo;   
        alert(numberOne + " + " + numberTwo + " = " + answer);
        
    }else if(operator == "-"){
        let answer = numberOne - numberTwo;
        alert(numberOne + " - " + numberTwo + " = " + answer);
        
    }else if(operator == "/"){
        let answer = numberOne / numberTwo;
        alert(numberOne + " / " + numberTwo + " = " + answer);
        
    }else if(operator == "*"){
        let answer = numberOne * numberTwo;
        alert(numberOne + " * " + numberTwo + " = " + answer);
        
    }
}
