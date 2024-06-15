//elements: column, row_number
//rows: row, id: row_number
function createCanvas(square_side = 16) {
  clearCanvas();
  let canvas = document.querySelector("#canvas");
  canvas.addEventListener("mouseover", changeColor);
  for (let i = 0; i < square_side; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", `${i + 1}`);
    row.classList.add("row");

    for (let j = 0; j < square_side; j++) {
      let column = document.createElement("div");
      column.classList.add(`${i + 1}`, "column");
      row.appendChild(column);
    }
    canvas.appendChild(row);
  }
}
function changeColor(event) {
  let element = event.target;
  if (element.classList.contains("column")) {
    element.classList.add("colored");
    element.style.backgroundColor = color;
  }
}
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

let color = "grey";
let resize = document.querySelector("#resize");
let clear = document.querySelector("#clear");
let input = document.querySelector("input");

resize.addEventListener("click", changeSize);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") changeSize();
});
clear.addEventListener("click", clearCanvas);
