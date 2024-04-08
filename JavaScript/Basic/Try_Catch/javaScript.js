let person={
    fName:'Rohit',
    lName:'Kumar',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error("you have not sent a String");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
}


console.log(person.fullName);
person.fullName='Rahul Kumar';


try{
    person.fullName=true;
}catch(e){
    alert(e);
}