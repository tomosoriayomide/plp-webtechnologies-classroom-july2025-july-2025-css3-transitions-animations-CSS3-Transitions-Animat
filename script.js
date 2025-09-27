// ===== Part 2: JavaScript Functions =====

// Global variable
let isAnimating = false;

// Function with parameter + return value
function toggleAnimation(elementId) {
  let element = document.getElementById(elementId);

  if (!isAnimating) {
    element.classList.add("animate");
    isAnimating = true;
    return "Animation started ✅";
  } else {
    element.classList.remove("animate");
    isAnimating = false;
    return "Animation stopped ❌";
  }
}

// Function to trigger animation (used in button)
function toggleBox() {
  let result = toggleAnimation("myBox"); // calling function with param
  console.log(result); // check scope + return value
}

// Function showing local scope
function showHideBox() {
  let box = document.getElementById("myBox"); // local scope
  box.classList.toggle("hidden");
}
