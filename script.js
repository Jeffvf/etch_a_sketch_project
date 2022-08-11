const container = document.getElementById('container');

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(i=0; i<rows*cols; i++){
        let cell = document.createElement('div');
        cell.innerText = ""
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16,16);

const grid = document.querySelectorAll('.grid-item');

grid.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'yellow';
    });
});