//elements: column, row_number
//rows: row, id: row_number
function createCanvas(square_side = 16) {
  let canvas = document.querySelector("#canvas");
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
  element.style.backgroundColor = color;
}
function getSize() {
  let size = 16;
  size = parseInt(size);
  if (size > 100) {
    size = 100;
  }
  if (Number.isNaN(size)) {
    size = 16;
  }
  return size;
}
let color = "grey";
size = getSize();
createCanvas(size);
let canvas = document.querySelector("#canvas");
canvas.addEventListener("mouseover", changeColor);
