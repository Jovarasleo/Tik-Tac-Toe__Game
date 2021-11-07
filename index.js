let board = [{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""}]
const app = document.querySelector("#app")
let lastMove = "";
let movesArr = [];
function renderBoard(){
    app.innerHTML = "";
    let it0 = board[0].value;
    let it1 = board[1].value;
    let it2 = board[2].value;
    let it3 = board[3].value;
    let it4 = board[4].value;
    let it5 = board[5].value;
    let it6 = board[6].value;
    let it7 = board[7].value;
    let it8 = board[8].value;

        board.forEach((obj)=>{
        const window = document.createElement("div")
        window.classList = "window"
        window.textContent = obj.value;
        app.append(window)

        if(obj.value === "" || obj.value === null){
            if (lastMove === "" || lastMove === "O"){
            window.addEventListener("click",()=>{
            obj.value = "X"
            lastMove = "X"
            movesArr.push(lastMove);
            renderBoard();
        })
    }
        if(lastMove === "X"){
            window.addEventListener("click",()=>{
            obj.value = "O"
            lastMove = "O"
            movesArr.push(lastMove);
            renderBoard();
        })
    }}})
    if(it0 != "" && it0 === it1 && it1 === it2 || it3 != "" && it3 === it4 && it4 === it5 || it6 != "" && it6 === it7 && it7 === it8 || it0 != "" && it0 === it3 && it3 === it6 || it1 != "" && it1 === it4 && it4 === it7 || it2 != "" && it2 === it5 && it5 === it8 || it0 != "" && it0 === it4 && it4 === it8 || it6 != "" && it6 === it4 && it4 === it2){
        movesArr = [];
        const msg = document.createElement("div")
        const H1 = document.createElement("H1")
        msg.classList = "msg";
        H1.textContent= `${lastMove} won!`;
        msg.appendChild(H1);
        app.appendChild(msg)
        board.forEach((obj)=>{
            obj.value = ""
        })
        H1.addEventListener("click",()=>{
            renderBoard();
    })} else if (movesArr.length==9){
        movesArr = [];
        const msg = document.createElement("div")
        const H1 = document.createElement("H1")
        msg.classList = "msg";
        H1.textContent= "DRAW";
        msg.appendChild(H1);
        app.appendChild(msg)
        board.forEach((obj)=>{
            obj.value = ""
        })
        H1.addEventListener("click",()=>{
            renderBoard();
    })
        
    }
}

window.addEventListener("load",()=>{
    renderBoard();
})