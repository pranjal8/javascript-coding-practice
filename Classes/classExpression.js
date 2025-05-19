let User= class MyClass{
    sayHi(){
        console.log("Hello", MyClass)
    }
}

new User().sayHi();
console.log(MyClass); // ReferenceError: MyClass is not defined
