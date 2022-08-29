const container = document.querySelector('.container');
function createGrid(x,y){
    for(let i = 0; i<x*y; i++)
    {
        const grid = document.createElement('div');
        const growx =  1000 / x ;
        const growy = 1000/y;
        grid.setAttribute('style', `width: ${growx}px; height:${growy}px;`)
        container.append(grid);
    }
}
function paint(){
    this.style.backgroundColor = "black";
}
createGrid(100,100);
let grid = container.getElementsByTagName('div');
let gridList = Array.from(grid);



for(let i = 0; i < gridList.length; i++)
{
    gridList[i].addEventListener('mouseover', paint);
}