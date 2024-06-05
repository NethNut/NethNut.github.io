function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  localStorage.setItem("bgColor", color);
}

document.addEventListener("DOMContentLoaded", function(){
  document.body.style.backgroundColor = localStorage.getItem("bgColor") ?? "lightblue";
});

