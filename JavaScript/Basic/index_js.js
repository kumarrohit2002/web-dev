console.log("Hello World");


// operator
let a=30;
let b=20;
console.log("a : ",a);
console.log("b : ",b);
console.log("a + b : ",a+b);
console.log("a - b : ",a-b);
console.log("a * b : ",a*b);
console.log("a / b : ",a/b);
console.log("a % b : ",a%b);
console.log("2 ** 3 : ",2**3);
console.log("a == b : ",a==b);
console.log("a === b : ",a===b);
console.log("a !== b : ",a!==b);
console.log("a != b : ",a!=b);
console.log("a >= b : ",a>=b);

// conditional operator..................................
if(a>b){
    console.log("a is greater.");
}else{
    console.log("b is greater");
}

let x=10;
y=20;
z=30;
if(x>y && x>z){
    console.log("X is greater");
}else if(y>x && y>z){
    console.log("Y is greater");
}else{
    console.log("Z is greater");
}

n=30;
if(n%2==0){
    console.log(n,"is even number");
}

//loop...........

console.log("For Loop: ");
for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=0;i<5;i++){
    console.log("Hello");
}


console.log("while Loop: ");
let i=0;
while(i<10){
    console.log(i);
    i++;
}


console.log("Do while Loop: ");
i=0;
do{
    console.log(i);
    i++;
}while(i<=5);