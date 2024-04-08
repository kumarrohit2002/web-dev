// //function called
// run();
// run();
// // function declaration
// function run(){
//     console.log("Running");
// }


// // Named function assignment
// let stand=function walk(){
//     console.log("Walking");
// }

// stand();
// let jump=stand;
// jump();

// //Anonimous function assignment
// let stand2=function(){
//     console.log("Walking 2");
// }

// stand2();


// function sum(){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }

// // console.log((sum(2,3)))
// // console.log((sum(2)))
// // console.log((sum()))
// // console.log((sum(1,2,3,4,5)))

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);
// let a = sum();
// console.log(a);



// Rest operator

function sum(num,...args) {
    console.log(args);    //Array
}
sum(1,2,3,4,5);


function interest(p,r=5,t=10){
        return p*(r/100)*t;
}

console.log(interest(1000,undefined,2));



// let person={
//     fName:'Rohit',
//     lName:'Kumar'
// }

// function fullName(){
//     return `${person.fName}  ${person.lName}`;
// }

// issue -> read only

// console.log(fullName());


// GETTER SETTER
// getter -> access propeties
// setter -> change or mutate propeties

let person={
    fName:'Rohit',
    lName:'Kumar',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
}


console.log(person.fullName);
person.fullName='Rahul Kumar';
console.log(person.fullName);



//scop

for(let i=0;i<10;i++){

}
console.log(i); // undefined

for(var i=0;i<10;i++){}
console.log(i);