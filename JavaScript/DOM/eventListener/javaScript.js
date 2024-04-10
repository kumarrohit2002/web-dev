
// function a(){
//     console.log("I have clicked on the document");
// }

// // Add EventListener
// document.addEventListener('click',a);

// // Remove EventListener
// document.removeEventListener('click',a);


// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// });




// let links = document.querySelectorAll('a');
// let thirdlink=links[2];

// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Maza aaya, acha laga');
// });




// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('para'+event.target.textContent);
// }

// myDiv.addEventListener('click',paraStatus);

// for(let i=0;i<=100;i++){

//     let newElement=document.createElement('p');
//     newElement.textContent="this is para "+i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



let element=document.querySelector('#wrapper'); 

element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN')
    console.log('span par click kai hai '+event.target.textContent);
});
