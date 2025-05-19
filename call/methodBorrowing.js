const name1={
    firstname:'Aman',
    lastname:'Singh',
    fullname: function(){
        console.log(this.firstname + ' ' + this.lastname)
    }
}
const name2= {
    firstname: 'Virat',
    lastname: "kohli"
}

//method borrowing --> You can borrow method from one object and use it with other object
name1.fullname.call(name2);


/* 
borrow fullname() method from name1 and call it on name2, changing the this context using call() 
*/
