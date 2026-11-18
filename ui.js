export function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function createMedia(src, alt, className) {
  const media = el('div', `media ${className}`)
  const label = el('span', 'media__label', 'Loading photo')
  const img = document.createElement('img')
  img.alt = alt
  img.loading = 'lazy'
  img.addEventListener('load', () => label.remove())
  img.addEventListener('error', () => {
    img.remove()
    label.remove()
  })
  img.src = src
  media.append(label, img)
  return media
}
