
const newGridButton = document.querySelector(".newGridButton");

newGridButton.addEventListener('click', () => {
    gridContainer.textContent = '';
    squareGridSize = prompt("Enter a number ");
    createGrid(squareGridSize);
    // console.log("YOU CLICKED ME");
})

const gridContainer = document.querySelector(".grid-container");


// edit for grid container
// can be done in style css
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignItems = 'center'; //maybe not needed
gridContainer.style.flexDirection = "column";

squareGridSize = 16;



function randomColor() {
    const randomColorNumber = Math.floor(Math.random() * (256));
    return randomColorNumber;
}

function randomRgbColor () {
    const rgbColorNumber1 = randomColor();
    const rgbColorNumber2 = randomColor();
    const rgbColorNumber3 = randomColor();
    return (`rgb(${rgbColorNumber1}, ${rgbColorNumber2}, ${rgbColorNumber3})`);
}

function makeGridSquare(gridRow) {
    const tempGridSquare = document.createElement('div');

    tempGridSquare.style.width = '50px';
    tempGridSquare.style.height = "50px";
    tempGridSquare.style.border = '1.5px solid black';
    tempGridSquare.className = "gridSqaure"
    let gridSquareOpactiy = 0;
    // add event listner for hover effect
    const handleMouseOver = () => {
            tempGridSquare.style.backgroundColor = randomRgbColor()};
    tempGridSquare.addEventListener('mouseover',handleMouseOver, {once: true});

    tempGridSquare.addEventListener('mouseover', () => {
        gridSquareOpactiy += 10;
        
        tempGridSquare.style.opacity = `${gridSquareOpactiy}%`;
    });
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


