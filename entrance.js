import { entrancePhoto } from './content.js'
import { el } from './ui.js'

const entrance = document.querySelector('#entrance')
const title = document.querySelector('#entrance-title')
const photo = document.querySelector('#entrance-photo')
const enterButton = document.querySelector('#enter-button')

function splitTitleIntoLetters() {
  const letters = [...title.textContent].map((char, index) => {
    const span = el('span', 'entrance__letter', char === ' ' ? '\u00a0' : char)
    span.style.animationDelay = `${index * 70}ms`
    return span
  })
  title.replaceChildren(...letters)
}

function handlePointerMove(event) {
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight
  entrance.style.setProperty('--tilt-x', (x - 0.5).toFixed(3))
  entrance.style.setProperty('--tilt-y', (y - 0.5).toFixed(3))
  entrance.style.setProperty('--pointer-x', `${(x * 100).toFixed(1)}%`)
  entrance.style.setProperty('--pointer-y', `${(y * 100).toFixed(1)}%`)
}

function closeEntrance() {
  entrance.classList.add('entrance--leaving')
  document.body.classList.remove('is-locked')
  window.setTimeout(() => {
    entrance.hidden = true
  }, 900)
}

export function setupEntrance() {
  splitTitleIntoLetters()
  photo.src = entrancePhoto
  photo.addEventListener('error', () => photo.remove())
  entrance.addEventListener('pointermove', handlePointerMove)
  enterButton.addEventListener('click', closeEntrance)
  enterButton.focus({ preventScroll: true })
}
