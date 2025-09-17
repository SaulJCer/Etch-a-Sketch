
const gridContainer = document.querySelector(".grid-container");


// edit for grid container
// can be done in style css
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignItems = 'center'; //maybe not needed

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

    for (i = 1; i <= squareGridSize; i++) {
        tempGridRow.appendChild(makeGridSquare());
    }
    
    tempGridRow.style.display = "flex";

    gridContainer.appendChild(tempGridRow);
};


makeGridRowContainer();