const notes = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
]
let interval = 5000;

function randomizeNote() {
    let fingerIndex = Math.ceil(Math.random() * 5)
    let noteIndex = Math.ceil(Math.random() * (notes.length - 1))
    
    return `${fingerIndex}${notes[noteIndex]}`
}

function updateDisplayedNote() {
    let noteSpan = document.querySelector('#note');
    noteSpan.textContent = randomizeNote();
    console.log(interval);
    setTimeout(updateDisplayedNote, interval);
}


function increaseSpeed(value) {
    interval += value;
    document.querySelector('#speed').textContent = `${interval/1000} s`
    console.log(interval);
}


export {
    updateDisplayedNote,
    increaseSpeed
}