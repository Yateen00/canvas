function createCanvas() {
  let canvas = document.querySelector("#canvas");
  let square_side = 16;
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
createCanvas();
