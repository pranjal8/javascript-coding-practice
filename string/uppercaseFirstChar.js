function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

//We can’t “replace” the first character, because strings in JavaScript are immutable.

//But we can make a new string based on the existing one, with the uppercased first character:
