let i = 0;

let sample = () => {
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("Timeout Value : " + i);
    }, 0);

    console.log("Display Value : " + i); //
  }
};

sample();
