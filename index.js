let drawnNumbers = [];

window.onload = function () {
    //load 76 bingo cells

    const bingoBoard = document.getElementById("board");

    bingoBoard.innerHTML = "";

    for (let i = 1; i < 77; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = i;
        cell.innerText = i;

        bingoBoard.appendChild(cell);
    }
};

document.getElementById("draw-number").onclick = function () {
    //if all numbers are drawn, do nothing
    if (drawnNumbers.length === 76) {
        alert("All done, can't draw anymore!");
        return;
    }
    //draw random number from 1 to 76 if not already drawn
    let number = Math.floor(Math.random() * 76) + 1;

    while (drawnNumbers.includes(number)) {
        number = Math.floor(Math.random() * 76) + 1;
    }

    drawnNumbers.push(number);

    const cell = document.getElementById(number);

    cell.classList.add("selected");
};
