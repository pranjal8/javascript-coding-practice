let obj={
    name:"Sai",
    age: 25,
    sayHi: () => {
        console.log(this.name, this.age) // obj is not accessible --> undefined undefined
        console.log(obj.name, obj.age) // obj is accessible --> Sai 25
    }
}

obj.sayHi(); // undefined undefined Sai 25