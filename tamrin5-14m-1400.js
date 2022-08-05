const students = [
  {
    id: 1,
    name: "arman",
    notes: [2, 4, 7, 3],
  },
  {
    id: 2,
    name: "ali",
    notes: [3, 4, 2, 9, 9],
  },
  {
    id: 3,
    name: "reza",
    notes: [2, 4, 6, 1],
  },
];

function makearray(value) {
  let max = 0;
  let arr = [];
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value[i].notes.length; ) {
      if (value[i].notes[j] > max) {
        max = value[i].notes[j];
        arr[i] = max;
        j++;
      } else {
        j++;
      }
    }
    max = 0;
  }
  return arr.sort(function (a, b) {
    return b - a;
  });
}

console.log(makearray(students));
