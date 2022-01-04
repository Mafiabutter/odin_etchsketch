function createGrid (sqrt) {
    const container = document.getElementById('container')
    for (let a = 0; a < sqrt; a++) {
        let newRow = document.createElement('div')
        newRow.className = 'row'
        container.appendChild(newRow)
        for (let b = 0; b < sqrt; b++) {
            let newSquare = document.createElement('div')
            newSquare.className = 'square'
            newRow.appendChild(newSquare)
        }
    }
}

createGrid(16)

const squares = document.querySelectorAll('.square')

const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'
    })
})

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        event.target.style.backgroundColor = 'grey'
    })
})