const arr = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
  },
];

// const res= arr.map((item)=>{
//     return item.name;
// })

const res = arr.reduce((acc, current) => {
  acc.push(current.name);
  return acc;
}, []);

console.log(res);
