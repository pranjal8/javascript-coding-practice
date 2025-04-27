let set = new Set(["oranges", "apples", "bananas"]);

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name, user); // John (then Pete and Mary)
}
