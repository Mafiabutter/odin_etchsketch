function createGrid (sqrt) {
    document.getElementById('container').innerHTML = ''
    let container = document.getElementById('container')
    container.style.setProperty('grid-template-columns', 'repeat(' + sqrt + ', ' + (750 / sqrt) + 'px)')
    container.style.setProperty('grid-template-rows', 'repeat(' + sqrt + ', ' + (750 / sqrt) + 'px)')
    for (let a = 0; a < sqrt; a++) {
        for (let b = 0; b < sqrt; b++) {
            let square = document.createElement('div')
            square.className = 'square'
            square.style.setProperty('grid-row', (a + 1).toString())
            square.style.setProperty('grid-column', (b + 1).toString())
            square.addEventListener('mouseover', () => {
                event.target.style.backgroundColor = 'black'
            })
            container.appendChild(square)
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

const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        event.target.style.backgroundColor = 'white'
    })
    queryForSqrt()
})

createGrid(16)