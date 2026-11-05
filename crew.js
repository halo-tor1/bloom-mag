import { teams } from './content.js'
import { el, createMedia } from './ui.js'

export function setupCrew() {
  const tabList = document.querySelector('#team-tabs')
  const teamName = document.querySelector('#team-name')
  const teamSummary = document.querySelector('#team-summary')
  const teamCount = document.querySelector('#team-count')
  const memberGrid = document.querySelector('#crew-grid')
  let activeTeamId = teams[0].id

  function createFlipCard(team, member, index) {
    const card = el('div', 'flip-card')
    card.tabIndex = 0
    card.setAttribute('role', 'button')
    card.setAttribute('aria-pressed', 'false')
    card.style.animationDelay = `${index * 90}ms`

    const inner = el('div', 'flip-card__inner')

    const front = el('div', 'flip-card__face flip-card__front')
    const details = el('div', 'flip-card__details')
    details.append(
      el('h3', 'flip-card__name', member.name),
      el('p', 'flip-card__role', member.role),
    )
    front.append(createMedia(member.image, member.name, 'media--portrait'), details)

    const back = el('div', 'flip-card__face flip-card__back')
    back.append(
      el('p', 'flip-card__team', team.name),
      el('h3', 'flip-card__name', member.name),
      el('p', 'flip-card__role', member.role),
      el('p', 'flip-card__bio', member.bio),
      el('span', 'flip-card__hint', 'Click to flip back'),
    )

    inner.append(front, back)
    card.append(inner)

    const toggle = () => {
      const flipped = card.classList.toggle('is-flipped')
      card.setAttribute('aria-pressed', String(flipped))
    }
    card.addEventListener('click', toggle)
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      toggle()
    })
    return card
  }

  function renderTabs() {
    tabList.replaceChildren(
      ...teams.map((team) => {
        const tab = el('button', 'team-tab', team.name)
        tab.type = 'button'
        tab.setAttribute('role', 'tab')
        tab.setAttribute('aria-selected', String(team.id === activeTeamId))
        tab.addEventListener('click', () => {
          activeTeamId = team.id
          renderTeam()
        })
        return tab
      }),
    )
  }

  function renderTeam() {
    const team = teams.find((item) => item.id === activeTeamId)
    teamName.textContent = team.name
    teamSummary.textContent = team.summary
    teamCount.textContent = `${team.members.length} members`
    memberGrid.replaceChildren(
      ...team.members.map((member, index) => createFlipCard(team, member, index)),
    )
    renderTabs()
  }

  renderTeam()
}
