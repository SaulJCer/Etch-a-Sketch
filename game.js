
const newGridButton = document.querySelector(".newGridButton");
const maxContainerSize = 9000;

newGridButton.addEventListener('click', () => {
    // gridContainer.textContent = '';
    squareGridSize = askUserForGridSize();
    createGrid(squareGridSize);
    console.log("YOU CLICKED ME");
})

// come back to this line of code def not finished 

function askUserForGridSize() {
    userGridSize = prompt("Enter a number ");
    console.log(typeof userGridSize);
    return (checkIfBiggerThan100(userGridSize)); 
}

function checkIfBiggerThan100(userGridSize) {
    while (userGridSize > 100 || 
           userGridSize < 1
          ) {
        userGridSize = prompt("Enter a number thats a max 100 and no lower than");
        console.log(userGridSize);
    }

    return userGridSize;
}

const gridContainer = document.querySelector(".grid-container");


// edit for grid container
// can be done in style css
gridContainer.style.display = "flex";
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignItems = 'center'; //maybe not needed
gridContainer.style.flexDirection = "column";
gridContainer.style.width= "800px"


squareGridSize = 16;




function makeGridSquare(gridRow, squareSize) {
    const tempGridSquare = document.createElement('div');

    // tempGridSquare.style.width = '50px';
    // tempGridSquare.style.height = "50px";
    tempGridSquare.className = "gridSqaure";
    tempGridSquare.style.border = '1.5px solid orange';
    tempGridSquare.style.display = "flex";
    tempGridSquare.style.flex = '1 1 20px';
    tempGridSquare.style.height = squareSize + 'px';
    tempGridSquare.style.width = squareSize + 'px';
    tempGridSquare.style.flexShrink = '1';
    

    // add event listner for hover effect
    tempGridSquare.addEventListener('mouseover', () => {
        tempGridSquare.style.backgroundColor = "black"
    })

    gridRow.appendChild(tempGridSquare);
};

function makeGridRowContainer(gridSize, squareSize) {
    const tempGridRow = document.createElement('div');
    tempGridRow.className = 'rowContainer';

    for (i = 1; i <= gridSize; i++) {
        makeGridSquare(tempGridRow, squareSize);
    }
    
    tempGridRow.style.display = "flex";
    tempGridRow.style.flexShrink = '1';

    return tempGridRow;
};

function createGrid(gridSize) {
     gridContainer.textContent = '';
    const sizeOfEachSquare = maxContainerSize / (gridSize * gridSize);
    for (j = 1; j <= gridSize; j++) {
        let gridRow = makeGridRowContainer(gridSize, sizeOfEachSquare);
        gridContainer.appendChild(gridRow);
    }
}



createGrid(squareGridSize);


