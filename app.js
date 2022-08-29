const container = document.querySelector('.container');

function createGrid(){
    for(let i = 0; i<16; i++)
    {
        const grid = document.createElement('div');
        container.append(grid);
    }
}
function paint(){
    this.setAttribute('style', 'background-color: black')
}

createGrid();
let grid = container.getElementsByTagName('div');
let gridList = Array.from(grid);

for(let i = 0; i < gridList.length; i++)
{
    gridList[i].addEventListener('mouseover', paint);
}