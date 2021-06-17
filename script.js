let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    if(numRows === 0) {
        let row = document.createElement("tr");
        document.getElementById("grid").appendChild(row);
        let box = document.createElement("td");

        box.style.backgroundColor = "white";

        if(box.style.backgroundColor != colorSelected) {
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
        }

        document.getElementsByTagName("tr")[numRows].appendChild(box);

        numRows++;
        numCols++;

        return;
    }

    for(let i = 0; i < numCols; i++) {
        let row = document.createElement("tr");
        document.getElementById("grid").appendChild(row);

        box = document.createElement("td");

        box.style.backgroundColor = "white";

        if(box.style.backgroundColor != colorSelected) {
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
        }

        document.getElementsByTagName("tr")[numRows].appendChild(box);
    }

    numRows++;
}

//Adds a column
function addC() {
    if(numCols === 0) {
        let row = document.createElement("tr");
        document.getElementById("grid").appendChild(row);
        box = document.createElement("td");

        box.style.backgroundColor = "white";

        if(box.style.backgroundColor != colorSelected) {
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
        }

        document.getElementsByTagName("tr")[numRows].appendChild(box);

        numRows++;
        numCols++;

        return;
    }

    for(let i = 0; i < numRows; i++) {
        box = document.createElement("td");

        box.style.backgroundColor = "white";

        if(box.style.backgroundColor != colorSelected) {
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
        }

        document.getElementsByTagName("tr")[i].appendChild(box);
    }

    numCols++;
}

//Removes a row
function removeR() {
    if(numRows === 0) {
        return;
    } 

    document.getElementsByTagName("tr")[numRows-1].remove();

    numRows--;

    if(numRows === 0) {
        numCols = 0;
    }
}

//Remove a column
function removeC() {
    if(numCols === 0) {
        return;
    }

    for(let i = 0; i < numRows; i++) {
        document.getElementsByTagName("tr")[i].lastChild.remove();
    }

    numCols--;

    if(numCols === 0) {
        numRows = 0;
    }
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let curBox = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            curBox.style.backgroundColor = colorSelected;
        }
    }
}

function clearAll(){
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let curBox = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            curBox.style.backgroundColor = "white";
        }
    }
}

function fillU(){
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let curBox = document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j];
            if(curBox.style.backgroundColor === "white") {
                curBox.style.backgroundColor = colorSelected;
            }
        }
    }
}

