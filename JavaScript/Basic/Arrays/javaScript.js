
let arr=[2,5,3,7,9];
console.log(arr);
console.log(arr[0]);

// insertion

arr.push(10);  // push at end
arr.unshift('A');  //push at start
arr.splice(2,0,100,200);  //push at index 2 arr.splice(idx,delete ele,val);

console.log(arr);


// Searching 

console.log("arr.indexOf(100): ",arr.indexOf(100)); //2
console.log("arr.indexOf('B'): ",arr.indexOf('B'));  //-1 for not present
console.log(arr.includes(100));

if(arr.includes(100)){
    console.log("100 is Present in Array");
}


//refernce array

let details = [{rno:1,Name:"rohit"},{rno:2,Name:"Ankita"}];

console.log(details.indexOf({rno:1,Name:"rohit"}));  // this give -1 because both address are diff


let res=details.find(function(detail){
    return detail.Name==="rohit";
});

console.log(res);

let r=details.find(function(detail){
    return detail.Name==="Horse";
});

// console.log(r); //undefind

let result=details.find(detail=>detail.Name==="Harsh");
console.log(result);


// Remove Element in Array
let numbers=[1,2,3,4,5,6];
// numbers.pop();  //end
// console.log(numbers);
// numbers.shift(); // start

// numbers.splice(3,1);  // remove ele in array at index 3
// console.log(numbers);


// all remove element
let number2=numbers;
// numbers.length=0;
//another way
numbers.splice(0,numbers.length)
console.log(numbers);
console.log(number2);



// combing array 
let first=[1,2,3];
let second=[4,5,6];

let third=first.concat(second);
console.log(third);


let forth=third.slice(2,4);
console.log(forth);



let number=[1,2,3,4,5];
console.log(number);
let joined=number.join(',');
console.log(joined)


let message='this is my first message';
let parts=message.split(' ');
console.log(parts);
let joi=parts.join('_');
console.log(joi);

//combing array 
let combined=[...number,...parts];
console.log(combined);


//Sorting 

let no=[20,30,10,40,54];
no.sort();
console.log(no);
no.reverse();
console.log(no);


// Filtering Array
let n=[1,2,-1,-2];
let filtered=n.filter(value=> value>=0);
console.log(filtered);  // 1 2


// Maping Arrays

let student=[1,2,3,4,5];
let studentno=student.map(value=>'Student_no'+value);
console.log(studentno);


// Maping with Obj

filtered=n.filter(value=> value>=0);

let item=filtered.map(function(num){
    return {value:num};
});
console.log(item);


// total sum of array

let array=[1,2,3,4];
let totalsum=array.reduce((accumulater,currentvalue)=>accumulater+currentvalue,0);
console.log(totalsum);