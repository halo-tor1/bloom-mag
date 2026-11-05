import './style.css'
import { articles, issueLabel } from './content.js'
import { el, createMedia, formatDate } from './ui.js'
import { setupEntrance } from './entrance.js'
import { setupGallery } from './gallery.js'
import { setupCrew } from './crew.js'

const dialog = document.querySelector('#article-dialog')
const categories = ['All', ...new Set(articles.map((article) => article.category))]
let activeCategory = 'All'

function openArticle(id) {
  const article = articles.find((item) => item.id === id)
  if (!article) return

  document.querySelector('#article-content').replaceChildren(
    createMedia(article.image, article.title, 'media--article'),
    el('p', 'eyebrow', article.category),
    el('h2', 'article__title', article.title),
    el('p', 'article__meta', `By ${article.author} · ${formatDate(article.date)}`),
    ...article.body.map((paragraph) => el('p', 'article__text', paragraph)),
  )
  dialog.scrollTop = 0
  dialog.showModal()
}

function renderHero() {
  const featured = articles.find((article) => article.featured) ?? articles[0]
  document.querySelector('#hero-media').replaceChildren(
    createMedia(featured.image, featured.title, 'media--hero'),
  )
  document.querySelector('#hero-issue').textContent = issueLabel
  document.querySelector('#hero-title').textContent = featured.title
  document.querySelector('#hero-excerpt').textContent = featured.excerpt
  document.querySelector('#hero-button').addEventListener('click', () => openArticle(featured.id))
}

function renderFilters() {
  const buttons = categories.map((category) => {
    const button = el('button', 'filter', category)
    button.type = 'button'
    button.setAttribute('aria-pressed', String(category === activeCategory))
    button.addEventListener('click', () => {
      activeCategory = category
      renderFilters()
      renderGrid()
    })
    return button
  })
  document.querySelector('#filters').replaceChildren(...buttons)
}

function createArticleCard(article, index) {
  const card = el('article', 'card')
  card.style.animationDelay = `${index * 80}ms`

  const body = el('div', 'card__body')
  const readButton = el('button', 'link-button', 'Read article')
  readButton.type = 'button'
  readButton.addEventListener('click', () => openArticle(article.id))

  body.append(
    el('p', 'card__meta', `${article.category} · ${formatDate(article.date)}`),
    el('h3', 'card__title', article.title),
    el('p', 'card__excerpt', article.excerpt),
    readButton,
  )
  card.append(createMedia(article.image, article.title, 'media--card'), body)
  return card
}

function renderGrid() {
  const visible = activeCategory === 'All'
    ? articles
    : articles.filter((article) => article.category === activeCategory)
  document.querySelector('#grid').replaceChildren(
    ...visible.map((article, index) => createArticleCard(article, index)),
  )
}

document.querySelector('#dialog-close').addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})

setupEntrance()
renderHero()
renderFilters()
renderGrid()
setupCrew()
setupGallery()
