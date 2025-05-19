const arr = [
  {
    name: "IPhone 16",
    type: "ios",
  },
  {
    name: "Ipad",
    type: "ios",
  },
  {
    name: "IWatch",
    type: "ios",
  },
  {
    name: "Tablet",
    type: "android",
  },
  {
    name: "Galaxy",
    type: "android",
  },
  {
    name: "Galaxy",
    type: "windows",
  },
];

function phones(arr) {

  let iphone = [];
  
  arr.filter((item) => {
    if (item.type === "ios") iphone.push(item.name);
  });

  let android = [];
  arr.filter((item) => {
    if (item.type === "android") android.push(item.name);
  });

  return { ios: iphone, android: android };
}
const ans = phones(arr);
console.log(ans);

// {
//     ios: ["Iphone 16", "Ipad", "Iwatch"]
//     android: ["Galaxy", 'Tablet']
// }
