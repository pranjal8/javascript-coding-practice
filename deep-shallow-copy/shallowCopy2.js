const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = [...ingredientsList];

ingredientsListCopy[1].list = ["rice flour", "water"];

console.log(ingredientsList[1].list);
console.log(ingredientsListCopy)
