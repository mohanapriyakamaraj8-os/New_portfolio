// Central theme controller. Colors live in src/styles.css as tokens (see "Theme system").
const KEY = 'mk-theme'
export const storedTheme = () => {
  try { const s = localStorage.getItem(KEY); return s === 'dark' || s === 'light' ? s : null } catch { return null }
}
export function applyTheme(t, save = false) {
  const root = document.documentElement
  root.classList.add('theme-switching')
  root.dataset.theme = t
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', t === 'dark' ? '#111111' : '#F7F7F2')
  if (save) { try { localStorage.setItem(KEY, t) } catch { /* storage unavailable */ } }
  clearTimeout(applyTheme.timer)
  applyTheme.timer = setTimeout(() => root.classList.remove('theme-switching'), 700)
}
