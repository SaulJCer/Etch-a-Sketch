
const gridContainer = document.querySelector(".grid-container");

squareGridSize = 16;

function makeGridSquare() {
    const tempGridSquare = document.createElement('div');

    tempGridSquare.style.width = '50px';
    tempGridSquare.style.height = "50px";
    tempGridSquare.style.border = '1.5px solid orange';
    tempGridSquare.className = "gridSqaure"
    return tempGridSquare;
};

function makeGridRowContainer() {
    const tempGridRow = document.createElement('div');
    tempGridRow.className = 'rowContainer';

    for (i = 1; i <= 16; i++) {
        tempGridRow.appendChild(makeGridSquare());
    }

    gridContainer.appendChild(tempGridRow);
};

makeGridRowContainer();