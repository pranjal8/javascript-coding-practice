function sayHi(){
    console.log(this.name)
}
sayHi.test =2;

console.log(sayHi.test); // 2

let bound = sayHi.bind({
    name:"John"
})

console.log(bound.test) //undefined

/* 
bind() only affects how the this inside the function behaves. 
The properties of the original sayHi function (like test) are not copied to the bound function.
*/