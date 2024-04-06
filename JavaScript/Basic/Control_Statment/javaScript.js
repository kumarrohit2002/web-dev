let a=10;
let b=20;
// if else
if(a>b){
    console.log("A is Greater than B");
}else{
    console.log("B is Greater than A");
}

// if else if else
let c=25;
if(a>b && a>c){
    console.log("A is Greater than B and C");
}else if(b>a && b>c){
    console.log("B is Greater than A and C");
}else{
    console.log("C is Greater than A and B");
}

// switch case 

let day=4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invailid");
        break;
}