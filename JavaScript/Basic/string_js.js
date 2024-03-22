console.log("String...............");
//String 

let s="Hello";
console.log(s);
let len=0;
for(let a of s){
    len++;
    console.log(a);
}
console.log("Length of String is ",len);
console.log("Length of String is (str.length): ",s.length);
console.log("s[0] : ",s[0]);
console.log("s[1] : ",s[1]);
console.log("typeof s : ",typeof s);

// Template Litetral
let name=`Rohit Kumar`;
console.log("Template Literal: ",name);


// for in loop
let student={
    name:"rohit",
    section:"K22FN",
    cgpa:7.34,
    Ispass:true,
}

for(let key in student){
    console.log(key," : ",student[key]);
}


// taking input from user...........................................
// let input=prompt("Enter your name: ");
// console.log(input);




