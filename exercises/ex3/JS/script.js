var container;
var size;
const letters = ["G", "A", "M", "E"];
var shuffledLetters = shuffle(letters.concat(letters));
var selectedSquares = [];

window.onload = function(event) {
    container = document.getElementById("boxes-layout3");
    size = 80;

    for (var i = 0; i < 7; i++) {
        var square = document.createElement("div");
        square.id = "square-" + i;
        square.style.width = size + "px";
        square.style.height = size + "px";
        square.style.backgroundColor = "black";

        var letter = document.createElement("div");
        letter.innerHTML = shuffledLetters[i];
        letter.style.color = "white";
        letter.style.fontSize = "50px";
        letter.style.textAlign = "center";
        letter.style.lineHeight = size + "px";
        square.appendChild(letter);

        container.appendChild(square);
        letter.style.visibility = "hidden";
        size += 20;

        square.addEventListener("click", function() {
            if (selectedSquares.length < 2 && !selectedSquares.includes(this)) {
                this.style.backgroundColor = "red";
                letter.style.visibility = "visible";
                selectedSquares.push(this);
                selectedSquares[0].childNodes[0].style.visibility = "visible";
                selectedSquares[1].childNodes[0].style.visibility = "visible";
                if (selectedSquares.length == 2) {
                    if (selectedSquares[0].childNodes[0].innerHTML == selectedSquares[1].childNodes[0].innerHTML) {
                        selectedSquares[0].style.backgroundColor = "red";
                        selectedSquares[1].style.backgroundColor = "red";
                        selectedSquares = [];
                    } else {
                        setTimeout(function() {
                            selectedSquares[0].style.backgroundColor = "black";
                            selectedSquares[0].childNodes[0].style.visibility = "hidden";
                            selectedSquares[1].style.backgroundColor = "black";
                            selectedSquares[1].childNodes[0].style.visibility = "hidden";
                            selectedSquares = [];
                        }, 1000);
                    }
                }
            }
        });
    }
    document.getElementById("add-sqr").addEventListener("click", function() {
        for (var j = 0; j < 3; j++) {
            var square = document.createElement("div");
            square.style.width = size + "px";
            square.style.height = size + "px";
            square.style.backgroundColor = "black";
            container.appendChild(square);
            size += 20;
        }
    });
};


function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle
    while (currentIndex != 0) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
};