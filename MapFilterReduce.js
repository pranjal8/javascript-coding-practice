const user = [ 
     { first_name: "Douglas Adams", last_name: "Trump", email: "douglas@gmail.com", age: 23, },
     { first_name: "Adams", last_name: "Moni", email: "adams@gmail.com", age: 45, }, 
     { first_name: "ousms", last_name: "Ogus", email: "ousms@gmail.com", age: 23, }, 
    ];

/* ====================== */

// acc = {23: 2 ,  45:1}
const res = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(res);

/*  ======================== */

// find first name of user whoes age is 23
const result = user.filter((x) => x.age === 23).map((x) => x.first_name);

console.log(result);
