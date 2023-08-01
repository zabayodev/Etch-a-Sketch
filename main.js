document.addEventListener("DOMContentLoaded", function(){
    createboard(16)
    console.log("hi")
})

function createboard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numdivs = size * size;
    for (let i = 0; i < numdivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "green";
        board.insertAdjacentElement("beforeend", div);
    }
}