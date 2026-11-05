import { galleryEvents } from './content.js'
import { el, createMedia } from './ui.js'

export function setupGallery() {
  const gallerySection = document.querySelector('#gallery')
  const galleryGrid = document.querySelector('#gallery-grid')
  const eventView = document.querySelector('#event-view')
  const eventTitle = document.querySelector('#event-title')
  const eventCount = document.querySelector('#event-count')
  const eventPhotos = document.querySelector('#event-photos')

  const lightbox = document.querySelector('#lightbox')
  const lightboxMedia = document.querySelector('#lightbox-media')
  const lightboxCount = document.querySelector('#lightbox-count')
  let lightboxPhotos = []
  let lightboxIndex = 0

  function renderLightboxPhoto() {
    lightboxMedia.replaceChildren(
      createMedia(lightboxPhotos[lightboxIndex], `Photo ${lightboxIndex + 1}`, 'media--lightbox'),
    )
    lightboxCount.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`
  }

  function openLightbox(photos, index) {
    lightboxPhotos = photos
    lightboxIndex = index
    renderLightboxPhoto()
    lightbox.showModal()
  }

  function stepLightbox(direction) {
    const total = lightboxPhotos.length
    lightboxIndex = (lightboxIndex + direction + total) % total
    renderLightboxPhoto()
  }

  function renderEventPhotos(event) {
    eventPhotos.replaceChildren(
      ...event.photos.map((src, index) => {
        const tile = el('button', 'photo-tile')
        tile.type = 'button'
        tile.setAttribute('aria-label', `Open ${event.title} photo ${index + 1}`)
        tile.append(createMedia(src, `${event.title} photo ${index + 1}`, 'media--tile'))
        tile.addEventListener('click', () => openLightbox(event.photos, index))
        return tile
      }),
    )
  }

  function renderEvent(event) {
    eventTitle.textContent = event.title
    eventCount.textContent = `${event.photos.length} photos`
    renderEventPhotos(event)
  }

  function renderGalleryList() {
    galleryGrid.replaceChildren(
      ...galleryEvents.map((event, index) => {
        const card = el('a', 'card card--link')
        card.href = `#gallery/${event.id}`
        card.style.animationDelay = `${index * 80}ms`
        const body = el('div', 'card__body')
        body.append(
          el('h3', 'card__title', event.title),
          el('p', 'card__meta', `${event.photos.length} photos`),
          el('span', 'link-text', 'View photos'),
        )
        card.append(createMedia(event.photos[0], `${event.title} cover`, 'media--card'), body)
        return card
      }),
    )
  }

  function showRoute() {
    const match = window.location.hash.match(/^#gallery\/(.+)$/)
    const event = match && galleryEvents.find((item) => item.id === match[1])

    if (event) {
      renderEvent(event)
      gallerySection.hidden = true
      eventView.hidden = false
      eventView.scrollIntoView({ block: 'start' })
      return
    }

    eventView.hidden = true
    gallerySection.hidden = false
    if (window.location.hash === '#gallery') gallerySection.scrollIntoView({ block: 'start' })
  }

  document.querySelector('#lightbox-close').addEventListener('click', () => lightbox.close())
  document.querySelector('#lightbox-prev').addEventListener('click', () => stepLightbox(-1))
  document.querySelector('#lightbox-next').addEventListener('click', () => stepLightbox(1))
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close()
  })
  document.addEventListener('keydown', (event) => {
    if (!lightbox.open) return
    if (event.key === 'ArrowLeft') stepLightbox(-1)
    if (event.key === 'ArrowRight') stepLightbox(1)
  })

  window.addEventListener('hashchange', showRoute)
  renderGalleryList()
  showRoute()
}
