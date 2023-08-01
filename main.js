let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createboard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now you can start drawing";
            }
            else{
                draw.innerHTML = "You are not allowed to draw"
            }
        }

    })
    
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
        div.addEventListener("mouseover", colorDiv)
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

function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }

}
function setColor(colorChoice){
    color = colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}