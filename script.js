function createGrid (sqrt) {
    
    for (let a = 0; a < sqrt; a++) {
        for (let b = 0; b < sqrt; b++) {
            
        }
    }
}

function queryForSqrt () {
    var newSqrt = window.prompt('Please enter a new resolution for the etch a sketch:  ')
    if (newSqrt > 100) {
        alert("Resolution cannot be greater than 100 for performance's sake. Resolution will now be set to 100.")
        newSqrt = 100
    }
    createGrid(newSqrt)
}

const squares = document.querySelectorAll('.square')

const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = 'white'
    })
    queryForSqrt()
})

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        event.target.style.backgroundColor = 'grey'
    })
})

createGrid(16)