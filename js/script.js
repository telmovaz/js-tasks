const wrapper = document.getElementById('wrapper');

const createCircle = function (color, text) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = color;

  if (text || text === 0) {
    circle.textContent = text;
  }

  wrapper.appendChild(circle);
}

let i = 0;
let colorRed = "red";
let colorOrange = "orange";

// Task 1

// let element = "element ";
// for (i = 0; i < 10; i++) {
//   console.log(element + i);
// }


// Task 2

// for (i = 0; i < 9; i++){
//   let colorRed = "red";
//   createCircle(colorRed);
// }



// Task 3

// do {

//   if (i % 2 ) {
//     createCircle(colorRed);
//     i++;
//   } else{
//     createCircle(colorOrange);
//     i++;
//   }

// }
// while (i < 12);




// Task 4


do {
  createCircle(colorRed, i);
  i++;
}
while (i < 15); 