let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    console.log(this)
    this.students.forEach((item) => console.log(this.title + " " + item));
  },
};
group.showList();

/* 
Here in forEach, the arrow function is used, so this.title in it is exactly the same as in the outer method showList. That is: group.title.

If we used a “regular” function, there would be an error:
*/
