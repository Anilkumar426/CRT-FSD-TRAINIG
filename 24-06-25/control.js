//if else statement
 let age=18;
if (age = 18){
    console.log("You are an minor");
}
else if(age >=18 && age <65){
    console.log("You are an adult");
}
else {
    console.log("You are a senior citizen");
}

//switch statement
let day= 7;
switch(day){
        case 1:
           console.log("sunday");
           break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
           console.log("wednesday");
           break;
        case 5:
           console.log("thursday");
           break;
        case 6:
          console.log("friday");
          break;
        case 7:
          console.log("saturday");
          break;
        default:
            console.log("invalid day")
}


let i=0;
while (i < 5){
    console.log("while loop");
    console.log(i);
    i++;
}

let k=0;
do{
    console.log("do while");
    console.log(k);
    k++;
}while(k<5);

