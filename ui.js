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
  media.append(el('span', 'media__label', 'Photo coming soon'))
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.loading = 'lazy'
  img.addEventListener('error', () => img.remove())
  media.append(img)
  return media
}
