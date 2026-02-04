function setChildDiv (gridSize) {
    const parentDiv = document.querySelector(".container");
    for(let i = 0; i < (gridSize * gridSize) + gridSize; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child");
        parentDiv.appendChild(childDiv);
    }
}

function setInkTrailStyle() {
    const childDiv = document.querySelectorAll(".child");
    childDiv.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.setProperty("background-color"," rgb(180,255,180)")
         })
    }) 
}


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
        setChildDiv(gridSize);
    }else{
    alert("Enter number between the range");
    }
}

function removePreviousGrid () {
    const childDiv = document.querySelectorAll(".child");
    childDiv.forEach(div => {
        div.remove()
    })
}

  setChildDiv(28);
  setInkTrailStyle();
