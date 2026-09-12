import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { loadPublishedContent } from './lib/content'

function CalendarPage() {
  const [activeType, setActiveType] = useState('All types')
  const [showRolling, setShowRolling] = useState(true)
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    loadPublishedContent().then((result) => {
      if (result.source === 'database') setEvents(result.content.deadlines ?? [])
      else setError(result.error)
    })
  }, [])
  const calendarTypes = ['All types', ...new Set((events ?? []).map((event) => event.type).filter(Boolean))]
  const filteredEvents = useMemo(() => (events ?? []).filter((event) => {
    const matchesType = activeType === 'All types' || event.type === activeType
    return matchesType && (showRolling || event.deadline !== 'Rolling')
  }), [activeType, events, showRolling])

  if (!events) return <main className="data-state"><div><p className="eyebrow">The opportunity desk</p><h1>{error ? 'The calendar is unavailable.' : 'Loading the calendar.'}</h1><p>{error ?? 'Connecting to the community database.'}</p></div></main>

  return (
    <main className="calendar-page">
      <nav className="nav-shell">
        <a className="brand" href="/" aria-label="The Bright Index home"><span className="brand-mark">✳</span><span>the bright<br /><em>index / india</em></span></a>
        <div className="nav-links"><a href="/?page=commons">Science commons</a><a href="/">Back to index</a></div>
        <a className="nav-button" href="/?page=commons">Explore resources</a>
      </nav>
      <section className="calendar-hero">
        <div><p className="eyebrow">The opportunity desk / 09</p><h1>Put curiosity<br /><span>on the calendar.</span></h1><p>Verified starting points for fellowships, scholarships, courses, competitions, and projects. Because the right opportunity is useless after the deadline.</p></div>
        <div className="calendar-stamp"><span>OPEN</span><strong>DOORS</strong><small>for curious people</small></div>
      </section>
      <section className="calendar-content">
        <div className="calendar-intro"><div><p className="eyebrow">A better next step</p><h2>Find a door.<br /><i>Keep the date.</i></h2></div><p>Deadlines change. Always verify dates and eligibility on the official page before applying. This calendar is a useful starting point, not the final authority.</p></div>
        <div className="calendar-toolbar"><div className="directory-tabs" role="tablist" aria-label="Filter opportunities by type">{calendarTypes.map((type) => <button key={type} className={activeType === type ? 'active' : ''} onClick={() => setActiveType(type)}>{type}</button>)}</div><label className="calendar-toggle"><input type="checkbox" checked={showRolling} onChange={(event) => setShowRolling(event.target.checked)} /> Show rolling opportunities</label></div>
        <div className="calendar-list">{filteredEvents.map((event, index) => <article className={`calendar-card ${event.tone}`} key={event.title}><div className="calendar-date"><span>{event.deadline === 'Rolling' ? '∞' : new Date(`${event.deadline}T00:00:00`).toLocaleDateString('en-IN', { day: '2-digit' })}</span><small>{event.deadline === 'Rolling' ? 'OPEN' : new Date(`${event.deadline}T00:00:00`).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</small></div><div className="calendar-card-copy"><div className="directory-card-top"><span>{String(index + 1).padStart(2, '0')} / {event.type}</span><span>{event.dateLabel}</span></div><h2>{event.title}</h2><p className="opportunity-audience">For {event.audience}</p><p>{event.description}</p><a className="source-link" href={event.link} target="_blank" rel="noreferrer">Check official page ↗</a></div></article>)}</div>
        {!filteredEvents.length && <p className="empty-state">No opportunities match this filter.</p>}
      </section>
      <section className="calendar-note"><div><p className="eyebrow">A small promise</p><h2>No dead ends.<br /><i>Only next steps.</i></h2></div><p>Every listing should answer three things quickly: is this for me, when do I act, and where do I verify it? Suggest a missing opportunity through the public contribution form on the main index.</p></section>
      <footer><span>© 2026 The Bright Index / India</span><span>Opportunity is a form of access <b>✳</b></span></footer>
    </main>
  )
}

export default CalendarPage
