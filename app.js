const container = document.querySelector('.container');
const button = document.querySelector('.userInput')
const resetbtn = document.querySelector('.reset')
createGrid(10,10);
let grid = container.getElementsByTagName('div');
let gridList = Array.from(grid);
gridList.forEach(div => {
    div.addEventListener('mouseover', paint);
});

function createGrid(x,y){
    for(let i = 0; i<x*y; i++)
    {
        const grid = document.createElement('div');
        const growx =  1000 / x ;
        const growy = 1000 / y;
        grid.setAttribute('style', `width: ${growy}px; height:${growy}px;`)
        container.append(grid);
    }
    return 
}
function paint(){
    this.style.backgroundColor = "black";
}
function changeGrid(){
    let input = prompt("Please write the size of the grid")
    if(input > 100)
    {
        alert("Too big! please write a number under or equal to 100")
        return;
    }
    else if(input <= 0)
    {
        alert("Too small! please write a number over 0")
        return;
    }
    {
    var divs = container.querySelectorAll('div');
    divs.forEach(div => {
        div.remove();
    });
    createGrid(input, input);
    grid = container.getElementsByTagName('div');
    gridList = Array.from(grid);
    gridList.forEach(div => {
        div.addEventListener('mouseover', paint);
    });
    }
}



button.addEventListener('click', changeGrid)
resetbtn.addEventListener('click', () => {
    var divs = container.querySelectorAll('div')
    divs.forEach(div => {
        div.style.backgroundColor="white";
    });
})