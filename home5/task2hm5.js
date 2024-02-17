

import readline from "readline";
function agePerson(){

    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    input.question("How old are you?", function (user) {

     if (user >= 18){
        console.log (true)
        input.close()
     } else {
        console.log (false)
        } 
        input.close()
    })    
}
agePerson();



// for arguments 15 and 25
function agePersonNew (a) {
    if (a < 25)
    { console.log ('You are 15 - not Adult') 
    }  
    else if (a >= 25) 
    { console.log ('You are 25 -  Adult')
    }
    else
    {console.log('Not an age')
    } 

   return agePersonNew
}
agePersonNew (25) // Adult
agePersonNew (15) // Not Adult
agePersonNew ("Hello")
