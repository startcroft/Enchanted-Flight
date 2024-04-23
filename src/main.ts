import './styles.scss'
const carrusel = document.getElementsByClassName('carrusel')[0];
const leftButton = document.getElementsByClassName('left__button--section')[0];
const rightButton = document.getElementsByClassName('right__button--section')[0];
const indicators = document.querySelectorAll('.dot') 
export const form = document.getElementById('registrationForm')
export const modal = document.querySelector('.modal')
export const candidateData = document.querySelectorAll('.studentData')
import { handleSubmit } from './registrationForm'

const span = 500;
let currentIndex = 0;

const clearActive = () => {
    for(let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
}

const executeMove = (index: number) => {
    let mov = index * span;
    carrusel.style.transform = `translateX(-${mov}px)`;
}

const moveSlide = (dir: string) => {
    if(dir === 'left') {
        currentIndex--;
    } else {
        currentIndex++;
    }

    console.log(carrusel)

    if(currentIndex < 0) {
        currentIndex = 0;
    }
    if(currentIndex > indicators.length - 1){
        currentIndex = indicators.length - 1;
    }

    indicators[currentIndex].classList.add('active');
    executeMove(currentIndex);
}


leftButton.addEventListener('click', () => {
    clearActive();
    moveSlide('left');
});

rightButton.addEventListener('click', () => {
    clearActive();
    moveSlide('right')
})

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        const position = i * -500; // Calcula la posición del carrusel
        carrusel.style.transform = `translateX(${position}px)`; // Mueve el carrusel

        // Limpia la clase 'active' de todos los indicadores y luego agrega 'active' al indicador actual
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[i].classList.add('active');
    });
});

form?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    handleSubmit();
})

