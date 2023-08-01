document.addEventListener("DOMContentLoaded", function(){
    createboard(16)
    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createboard(size);
    })
})

function createboard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numdivs = size * size;
    for (let i = 0; i < numdivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black"
        })
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Select the size of he board you want to use");
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please the number of board size";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "The number should be between 1 and 100"
    }
    else{
        message.innerHTML = "Great, You can now play!"
        return input;
    }
}