//elements: column, row_number
//rows: row, id: row_number

//canvas related functions
let defaultBgColor = "white";
let defaultOpacity = "1";
function createCanvas(square_side = 16) {
  clearCanvas();
  let canvas = document.querySelector("#canvas");
  for (let i = 0; i < square_side; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", `${i + 1}`);
    row.classList.add("row");

    for (let j = 0; j < square_side; j++) {
      let column = document.createElement("div");
      column.classList.add(`${i + 1}`, "column");
      column.setAttribute(
        "style",
        `background-color: ${defaultBgColor}; opacity:${defaultOpacity};`
      );
      row.appendChild(column);
    }
    canvas.appendChild(row);
  }
  canvas.addEventListener("mouseover", changeColor);
  canvas.addEventListener("click", changeColor);
}
function changeColor(event) {
  let element = event.target;
  if (element.classList.contains("column")) {
    let bg = element.style.backgroundColor;
    let opacity = element.style.opacity;
    opacity = parseFloat(opacity);
    if (bg === defaultBgColor && opacity.toString() === defaultOpacity) {
      element.classList.add("colored");
      element.style.backgroundColor = getRandomColor();
      element.style.opacity = "0.1";
    } else if (opacity < 1) {
      opacity = (opacity * 10 + 1) / 10;
      element.style.opacity = opacity.toString();
    }
  }
  function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
  }
}

//utility functions
function parseSize(size = 16) {
  size = parseInt(size);
  if (size > 100) {
    size = 100;
  }
  if (Number.isNaN(size)) {
    size = 16;
  }
  return size;
}
function clearCanvas() {
  let coloredColumns = document.querySelectorAll(".colored");
  input.value = "";
  coloredColumns.forEach((column) => {
    column.classList.remove("colored");
    column.style.backgroundColor = "white";
  });
}
function changeSize() {
  let size = parseSize(input.value);
  createCanvas(size);
}
let resize = document.querySelector("#resize");
let clear = document.querySelector("#clear");
let input = document.querySelector("input");

resize.addEventListener("click", changeSize);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") changeSize();
});
clear.addEventListener("click", clearCanvas);
alert(
  "input a size, and click or hover mouse to draw. random colour each time."
);
