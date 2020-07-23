var battlefield = document.querySelector(".container");
const fire = () => {
  battlefield.childNodes[Math.floor(Math.random() * 10)].childNodes[
    Math.floor(Math.random() * 10)
  ].style.background = "red";
};

window.onload = () => {
  for (var i = 0; i < 10; i++) {
    var row = document.createElement("div");
    battlefield.appendChild(row);
    row.style.display = "flex";
    for (var k = 0; k < 10; k++) {
      var cell = document.createElement("div");
      row.appendChild(cell);
      cell.innerHTML = Math.floor(Math.random() * 2);
      cell.style.border = "2px solid gray";
      cell.style.padding = "15px";
      if (cell.innerHTML == 1) cell.style.background = "gray";
    }
  }
  var button = document.createElement("button");
  button.innerHTML = "Fire";
  button.style.padding = "10px 30px";
  button.style.background = "red";
  battlefield.appendChild(button);
  button.addEventListener("click", fire);
};
