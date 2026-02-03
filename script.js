const parentDiv = document.querySelector(".container");
for(let i = 0; i< 256; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("child");
    parentDiv.appendChild(childDiv);
}







