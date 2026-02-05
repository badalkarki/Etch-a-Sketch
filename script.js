function setChildRowsDiv (gridSize) {
    const parentDiv = document.querySelector(".container");
    for(let i = 0; i < gridSize; i++) {
        const childRowsDiv = document.createElement("div");
        childRowsDiv.classList.add("childRows");
        parentDiv.appendChild(childRowsDiv);
    }
}

function setChildColsDiv(gridSize){
    const childRowsDiv = document.querySelectorAll(".childRows");
    childRowsDiv.forEach(rows => {
        for(let i = 0; i < gridSize; i++){
             const childColsDiv = document.createElement("div");
             childColsDiv.classList.add("childCols");
             rows.appendChild(childColsDiv);
        }
    })
}

function randomNumber(num) {
   return Math.floor(Math.random() * num)
}

function setInkTrailStyle() {
    const childColsDiv = document.querySelectorAll(".childCols");
    childColsDiv.forEach(div => {
        div.addEventListener("mouseover", () => {
            const randomColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
            div.style.backgroundColor = randomColor; // to make color dyammic
         })
    }) 
}

//  click event listener
const btn = document.querySelector("button");
let gridSize;
btn.addEventListener("click",() => {
    gridSize = +prompt("Number of squares per side on new grid");
    console.log(gridSize);       
    alterGridSize(gridSize);
    setInkTrailStyle();
})


function alterGridSize (gridSize) {
    removePreviousGrid(); 
    if (gridSize >=4 && gridSize <= 100) { 
        setChildRowsDiv(gridSize);
        setChildColsDiv(gridSize);
    }else{
    alert("Enter number between the range of 4 - 100");
    setChildRowsDiv(8);
    setChildColsDiv(8);
    }
}

function removePreviousGrid () {
    const childRowsDiv = document.querySelectorAll(".childRows");
    childRowsDiv.forEach(div => {
        div.remove()
    })
}
  setChildRowsDiv(8);
  setChildColsDiv(8);
  setInkTrailStyle();

