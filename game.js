
const newGridButton = document.querySelector(".newGridButton");

newGridButton.addEventListener('click', () => {
    gridContainer.textContent = '';
    squareGridSize = prompt("Enter a number ");
    createGrid(squareGridSize);
    console.log("YOU CLICKED ME");
})

const gridContainer = document.querySelector(".grid-container");


// edit for grid container
// can be done in style css
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignItems = 'center'; //maybe not needed
gridContainer.style.flexDirection = "column";

squareGridSize = 16;




function makeGridSquare(gridRow) {
    const tempGridSquare = document.createElement('div');

    tempGridSquare.style.width = '50px';
    tempGridSquare.style.height = "50px";
    tempGridSquare.style.border = '1.5px solid orange';
    tempGridSquare.className = "gridSqaure"

    // add event listner for hover effect
    tempGridSquare.addEventListener('mouseover', () => {
        tempGridSquare.style.backgroundColor = "black"
    })

    gridRow.appendChild(tempGridSquare);
};

function makeGridRowContainer(gridSize) {
    const tempGridRow = document.createElement('div');
    tempGridRow.className = 'rowContainer';

    for (i = 1; i <= gridSize; i++) {
        makeGridSquare(tempGridRow);
    }
    
    tempGridRow.style.display = "flex";

    return tempGridRow;
};

function createGrid(gridSize) {
    for (j = 1; j <= gridSize; j++) {
        let gridRow = makeGridRowContainer(gridSize);
        gridContainer.appendChild(gridRow);
    }
}



createGrid(squareGridSize);


