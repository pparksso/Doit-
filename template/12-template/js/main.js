const frame = document.querySelector("#circle");
const lists = frame.querySelector("article");
const deg = 45;
const len = lists.length - 1;
let i = 0;
for (let el of lists) {
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  i++;
}
