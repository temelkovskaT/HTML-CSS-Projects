const imgArray = [
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",

  "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",

  "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=3359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",

  "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",

  "https://images.unsplash.com/photo-1579783901837-c78c2310be05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80",

  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1570393080660-de4e4a15a247?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1599894019794-50339c9ad89c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1602464729960-f95937746b68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// console.log(imgArray.length);

let min = 0;
let max = imgArray.length;

function randomise() {
  return Math.floor(Math.random() * imgArray.length);
}

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const img4 = document.getElementById("img-4");
const img5 = document.getElementById("img-5");
const img6 = document.getElementById("img-6");

// let num1 = 0;
function shuffleImages() {
  img1.setAttribute("src", imgArray[randomise()]);
  img2.setAttribute("src", imgArray[randomise()]);
  img3.setAttribute("src", imgArray[randomise()]);
  img4.setAttribute("src", imgArray[randomise()]);
  img5.setAttribute("src", imgArray[randomise()]);
  img6.setAttribute("src", imgArray[randomise()]);
}

setInterval(shuffleImages, 2000);

// function check(num1, num2) {
//   if (num1 === num2) {
//     if (num1 === 0) return 1;
//     else if (num1 === imgArray.length - 1) {
//       return imgArray.length - 2;
//     } else {
//       return randomise();
//     }
//   }
// }

shuffleImages();

// console.log(imgEl.setAttribute("src", imgArray[2]));

// console.log(randomise());

// burger menu toggle on click
function toggleMenu(x) {
  x.classList.toggle("change");
}
