const board = [{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""},{value:""}]
const app = document.querySelector("#app")
console.log(app, "hello")
let lastMove = "";
function renderBoard(){
    console.log(lastMove)
    board.forEach((obj, index)=>{
        const window = document.createElement("div")
        window.classList = "window"
        window.textContent = obj.value;
        app.append(window)
        
        if(obj.value === "" || obj.value === null){
            if (lastMove === "" || lastMove === "O"){
            window.addEventListener("click",()=>{
            obj.value = "X"
            lastMove = "X"
            app.innerHTML = "";
            renderBoard();
            console.log(lastMove)
        })
    }
        if(lastMove === "X"){
            window.addEventListener("click",()=>{
            obj.value = "O"
            lastMove = "O"
            app.innerHTML = "";
            renderBoard();
            console.log(lastMove)
        })
    }}})
}
window.addEventListener("load",()=>{
    renderBoard();
})