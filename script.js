//choose progress class
const progress = document.getElementById("progress");
//choose previous btn
const prev = document.getElementById("prev");
//choose next btn
const next = document.getElementById("next");
// query selector all for multiple circle classes
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//when click button next, it will trigger event listener
next.addEventListener("click", () => {
  currentActive++;

  //stay counted equal to circle length;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

//Add event listener to btn prev, also decrease current Active
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//for each loop, if index < current active, we add class active, if index > active, we remove active
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //choose all of active classes
  const actives = document.querySelectorAll(".active");

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

  if(currentActive ===1) {
      prev.disabled = true;
  } else if(currentActive === circles.length) {
     next.disabled = true;
  }else {
      prev.disabled = false;
      next.disabled = false;
  }
}
