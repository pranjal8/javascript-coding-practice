const array=[42];
const array1 =new Array(42, "Hello", "myVar", 3.14159);
console.log(array1,"array1 length:-", array1.length, "array length:-", array.length)

const arr= Array.of(9.6, 6.7);
console.log(arr, "length:-",  arr.length)

const myArray = ["Wind", "Rain", "Fire", 40, 50 ,10];
myArray[1.6] ='Orange';
myArray[1.7] ='Mango';
myArray[1.8] ='Apple';
myArray[1.9] ='Banana';
console.log(myArray)

const cats = [];
cats[30] = ["Dusty"];
cats.length = 5
console.log(cats, "length:-",  cats.length);// 31

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisleclg";
const cities= data.split(',')
console.log(data , cities, cities.length, cities[cities.length-1])
const commaSeparated = cities.join(",");
console.log(commaSeparated);