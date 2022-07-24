let input = prompt("Enter a number below to find out if it is ODD or EVEN:");
            
            input = parseInt(input); 

            function printOddEven(){
               
                if(input % 2 == 0){
                    document.getElementById("answer").innerHTML = "Even";
                }else{
                    document.getElementById("answer").innerHTML = "Odd";
                }
           }

           printOddEven();