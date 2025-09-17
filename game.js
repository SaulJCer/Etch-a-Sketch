
const gridContainer = document.querySelector(".grid-container");

squareGridSize = 16;

function makeGridSquare() {
    const tempGridSquare = document.createElement('div');

    tempGridSquare.style.width = '50px';
    tempGridSquare.style.height = "50px";
    tempGridSquare.style.border = '1.5px solid orange';
    gridContainer.appendChild(tempGridSquare);

}

makeGridSquare();