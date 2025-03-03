// Simple JavaScript Function
function showMessage() {
    alert("Hello! Welcome to my website.");
  }
  
  // Adding event listener to run the showMessage function when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById("home");
    homeSection.innerHTML += '<button onclick="showMessage()">Click Me</button>';
  });
  