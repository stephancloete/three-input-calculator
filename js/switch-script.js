function returnInput(){
    let numberOne = document.getElementById("inputOne").value;
    numberOne = parseInt(numberOne);
    let numberTwo = document.getElementById("inputTwo").value;
    numberTwo = parseInt(numberTwo);
    let operator = document.querySelector("input[type='radio'][name=selectOperator]:checked").value;
 
    
        switch(operator){
            case "+" :
                let answerPlus = numberOne + numberTwo;
                 alert(numberOne + " + " + numberTwo + " = " + answerPlus);
                break;
            case "-" :
                let answerMinus = numberOne - numberTwo;
                 alert(numberOne + " - " + numberTwo + " = " + answerMinus);
                break;
            case "/" :
                let answerDivide = numberOne / numberTwo;
                alert(numberOne + " / " + numberTwo + " = " + answerDivide);
                break;
            case "*" :
                let answerMultiply = numberOne * numberTwo;
                alert(numberOne + " * " + numberTwo + " = " + answerMultiply);
                break;
            default:
                console.log("invalid selection");
                break;
        }


}
