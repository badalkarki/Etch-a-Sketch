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


function setInkTrailStyle() {
    const childColsDiv = document.querySelectorAll(".childCols");
    childColsDiv.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.setProperty("background-color"," rgb(180,255,180)")
         })
    }) 
}

//  click event listener
const btn = document.querySelector("button");
let gridSize;
btn.addEventListener("click",() => {
    gridSize = +prompt("Enter number betwn 4-100 to change grid size");
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
