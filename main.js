document.addEventListener("DOMContentLoaded", function(){
    createboard(16)
    console.log("hi")
})

function createboard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}