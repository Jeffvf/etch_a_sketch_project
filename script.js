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

function add_color_to_cells(){
    const grid = document.querySelectorAll('.grid-item');
    
    grid.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'yellow';
        });
    });
}

makeRows(16,16);
add_color_to_cells();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let size = window.prompt('Choose the size of the new grid:');
    if(size != null && size<=100){
        container.innerHTML = "";
        makeRows(size,size);
        add_color_to_cells();
    }
});