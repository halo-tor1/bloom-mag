import { galleryEvents } from './content.js'
import { el, createMedia } from './ui.js'

export function setupGallery() {
  const gallerySection = document.querySelector('#gallery')
  const galleryGrid = document.querySelector('#gallery-grid')
  const eventView = document.querySelector('#event-view')
  const eventTitle = document.querySelector('#event-title')
  const eventCount = document.querySelector('#event-count')
  const eventPhotos = document.querySelector('#event-photos')
  const slideshow = document.querySelector('#gallery-slideshow')
  const topSlideshow = document.querySelector('#top-slideshow')

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

  function renderSlideshow() {
    const slides = galleryEvents.flatMap((event, eventIndex) => event.photos.slice(0, 3).map((src, photoIndex) => {
      const slide = el('a', 'gallery-slideshow__slide')
      slide.href = `#gallery/${event.id}`
      slide.append(createMedia(src, `${event.title} featured photo ${photoIndex + 1}`, 'gallery-slideshow__media'))

      const caption = el('div', 'gallery-slideshow__caption')
      caption.append(el('p', 'eyebrow', `Event ${eventIndex + 1} · Highlight ${photoIndex + 1}`), el('h3', '', event.title))
      slide.append(caption)
      return slide
    }))

    let activeIndex = 0
    const showSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length
      slides.forEach((slide, slideIndex) => slide.toggleAttribute('hidden', slideIndex !== activeIndex))
    }

    const controls = el('div', 'gallery-slideshow__controls')
    const previous = el('button', 'nav-button', '←')
    const next = el('button', 'nav-button', '→')
    previous.type = 'button'
    next.type = 'button'
    previous.setAttribute('aria-label', 'Previous featured event')
    next.setAttribute('aria-label', 'Next featured event')
    previous.addEventListener('click', () => showSlide(activeIndex - 1))
    next.addEventListener('click', () => showSlide(activeIndex + 1))
    controls.append(previous, next)
    slideshow.replaceChildren(...slides, controls)
    showSlide(0)
    window.setInterval(() => showSlide(activeIndex + 1), 5000)
  }

  function renderTopSlideshow() {
    const slides = galleryEvents.flatMap((event) => event.photos.map((src, index) => ({
      src,
      title: event.title,
      index,
    })))
    let activeIndex = 0
    const stage = el('div', 'top-slideshow__stage')
    const controls = el('div', 'top-slideshow__controls')
    const previous = el('button', 'nav-button', '←')
    const next = el('button', 'nav-button', '→')
    previous.type = 'button'
    next.type = 'button'
    previous.setAttribute('aria-label', 'Previous featured photo')
    next.setAttribute('aria-label', 'Next featured photo')
    const showSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length
      stage.replaceChildren(
        createMedia(slides[activeIndex].src, `${slides[activeIndex].title} photo`, 'top-slideshow__media'),
        el('p', 'top-slideshow__label', `${slides[activeIndex].title} · Photo ${slides[activeIndex].index + 1}`),
      )
    }
    previous.addEventListener('click', () => showSlide(activeIndex - 1))
    next.addEventListener('click', () => showSlide(activeIndex + 1))
    controls.append(previous, next)
    topSlideshow.replaceChildren(stage, controls)
    showSlide(0)
    window.setInterval(() => showSlide(activeIndex + 1), 4500)
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
    gallerySection.hidden = window.location.hash !== '#gallery'
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
  galleryEvents.flatMap((event) => event.photos).forEach((src) => {
    const image = new Image()
    image.src = src
  })
  renderTopSlideshow()
  renderSlideshow()
  renderGalleryList()
  showRoute()
}
