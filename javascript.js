const grid = document.querySelector(".grid");
const button = document.querySelector("button");
const size = document.querySelector(".size");

let dimensions = 16;
updateGrid();

function updateGrid() {
    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.flexBasis = `${100 / dimensions}%`;
            gridItem.style.height = `${100 / dimensions}%`;
            grid.appendChild(gridItem);

            gridItem.addEventListener("mouseover", () => {
                let opacity = gridItem.style.opacity;
                if (opacity) {
                    gridItem.style.opacity = Number(opacity) + 0.1;
                } else {
                    gridItem.style.opacity = 0.1;
                }
            });

            // gridItem.addEventListener("mouseover", () => {
            //     gridItem.style.backgroundColor = "black";
            // });
        }
    }
    size.textContent = `${dimensions} x ${dimensions}`;
}

function cleanUpGrid() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.remove();
    });
}

button.addEventListener("click", () => {
    dimensions = prompt("Input a dimension size (max 100):");
    if (dimensions < 0) {
        dimensions = 0;
    }
    else if (dimensions > 100) {
        dimensions = 100;
    }
    cleanUpGrid();
    updateGrid();
});