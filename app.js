const board = document.querySelector('#board')
const colors = ['#d77ccc', '#ef4bce', '#d824da', '#a11cca', '#c73ccf']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')  //динамически создаем html элемент, в строковом формате указ какой элемент хлтим создать
    square.classList.add('square') //добавляем класс

    square.addEventListener('mouseover', () => //событие mouseover вызывается когда мы наводим мыщь на опред квадрат
    setColor(square))  

    square.addEventListener('mouseleave', () => // mouseleave убираем мышь
    removeColor(square)) 

    board.append(square) // появляем наши квадраты
}

function setColor(element) { // element - это наш квадрат
    const color = getRandomColor()
    element.style.backgroundColor = color // поменяли стиль элемента а именно цвет квадрата
    element.style.boxShadow = `0 0 3px ${color}, 0 0 30px ${color}` // используя обратные ковычки мы можем передавать динамическое значение прямо в строчку
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {  //получаем рандомный цвет из нашего массива
const index = Math.floor(Math.random() * colors.length)
return colors[index]
}
