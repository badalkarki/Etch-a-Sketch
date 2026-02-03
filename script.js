const parentDiv = document.querySelector(".container");
for(let i = 0; i < 256+16; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("child");
    parentDiv.appendChild(childDiv);
}

const childDiv = document.querySelectorAll(".child");
childDiv.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.setProperty("background-color"," rgb(180,255,180)")
    })
}); 


