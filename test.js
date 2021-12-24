const arr = [false, false, true, false, true, false];

console.log(
  arr.some((element, index) => {
    console.log(element, index);
    return element;
  })
);

console.log(
  arr.some(function callback(element, index) {
    console.log(element, index);
    return element;
  })
);
