//elements: column, row_number
//rows: row, id: row_number

//canvas related functions
let defaultBgColor = "white";
let defaultOpacity = "1";
let canvas = document.querySelector("#canvas");
canvas.addEventListener("click", changeColor);
mouseDown();
let isMouseDown = false;

function handleMouseDown(event) {
  isMouseDown = true;
  changeColor(event);
}

function handleMouseUp() {
  isMouseDown = false;
}

function handleMouseMove(event) {
  if (isMouseDown) {
    changeColor(event);
  }
}

function handleMouseLeave() {
  isMouseDown = false;
}

function mouseDown() {
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseleave", handleMouseLeave);
}

function createCanvas(square_side = 16) {
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
  clearCanvas();
  canvas.innerHTML = "";
  createCanvas(size);
}
function setHover(isOn) {
  if (isOn) {
    mouseDown();
  } else {
    canvas.removeEventListener("mousedown", handleMouseDown);
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseleave", handleMouseLeave);
    canvas.removeEventListener("mouseup", handleMouseUp);
  }
}
function utilityClickEvents(e) {
  let target = e.target;
  switch (target.id) {
    case "hoverOn":
      setHover(true);
      break;
    case "hoverOff":
      setHover(false);
      break;
    case "resize":
      changeSize();
      break;
    case "clear":
      clearCanvas();
      break;
  }
}

let input = document.querySelector("input");
let utility = document.querySelector("#utility");
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") changeSize();
});
utility.addEventListener("click", utilityClickEvents);

alert(
  "input a size, and click mouse or keeping pressing it down to draw . random colour each time."
);
