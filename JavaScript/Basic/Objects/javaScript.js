//Object creation
let rollno={
    rohit:58,
    Ankita:57,
    Raju:35,
    Arvind:36
};

// function is also called object

console.log(rollno.rohit);
console.log(rollno.Ankita);

// let rectangle={
//     length:2,
//     width:4,
//     draw:function(){
//         console.log("draw rectangle");
//     }
// };

//factor function
function creatRectangle(len,wid){
    return rectangle={
        length:len,
        width:wid,
        draw(){
            console.log("draw rectangle");
        }
    };
}

//create
let rectangleObj1=creatRectangle(3,6);
let rectangle2=creatRectangle(4,8);

rectangleObj1.draw();


//constractor creation
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("draw rectangle");
    }
}

// Obj creation
let rectangleobj=new Rectangle(4,6);

rectangleobj.color="yellow";
console.log(rectangleobj);


delete rectangleobj.color;
console.log(rectangleobj);



let rectangle1=new Function(
    'length','breath',
    `this.length=length;
    this.breadth=breath;
    this.draw=function(){
        console.log("draw rectangle");
    }`
)

// onj creation using rectangle1
let rec=new rectangle1(3,8);
console.log(rec)


// refrence type
let a={value:10}
let b=a;
a.value++;
console.log(a.value);
console.log(b.value);


//for in loop
let object={
    a:10,
    b:20,
    c:30
}

for(let key in object) {
    console.log(key," ",object[key]);
}

// Object cloning


//  #1.
// let des={};
// for(let key in object){
//     des[key]=object[key];
// }
// object.a++;
// console.log(des);



//  #2.
// let des=Object.assign({},object);
// object.a++;
// console.log(des);


// #3.
let des={...object}; 
object.a++;
console.log(des);

