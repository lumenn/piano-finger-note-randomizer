import { updateDisplayedNote, increaseSpeed } from "./randomizer.js";



document.querySelector('#increase').addEventListener('click', () => increaseSpeed(-500));
document.querySelector('#increase2').addEventListener('click', () => increaseSpeed(-1000));
document.querySelector('#decrease').addEventListener('click', () => increaseSpeed(500));
document.querySelector('#decrease2').addEventListener('click', () => increaseSpeed(1000));

updateDisplayedNote();

