import { useMemo, useState } from 'react'
import './App.css'

const scientists = [
  { name: 'Ritu Karidhal Srivastava', field: 'Space', origin: 'India', role: 'Mission director', fact: 'Served as deputy operations director for India’s Mars Orbiter Mission', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ritu%20Karidhal.jpg', placeholder: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/Ritu_Karidhal', color: 'sky' },
  { name: 'Mylswamy Annadurai', field: 'Space', origin: 'India', role: 'Lunar mission architect', fact: 'Led Chandrayaan-1 and was programme director for the Mars Orbiter Mission', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mylswamy%20Annadurai.jpg', placeholder: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/Mylswamy_Annadurai', color: 'yellow' },
  { name: 'Tessy Thomas', field: 'Engineering', origin: 'India', role: 'Aerospace scientist', fact: 'Project director for India’s Agni-IV long-range ballistic missile programme', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tessy%20Thomas.jpg', placeholder: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/Tessy_Thomas', color: 'coral' },
  { name: 'Gagandeep Kang', field: 'Medicine', origin: 'India', role: 'Vaccine researcher', fact: 'Led research that advanced understanding and prevention of rotavirus disease', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gagandeep%20Kang.jpg', placeholder: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85', source: 'https://wellcome.org/news/gagandeep-kang-joins-wellcome-trust', color: 'lilac' },
  { name: 'Raghunath Mashelkar', field: 'Chemistry', origin: 'India', role: 'Polymer scientist', fact: 'Advanced research in polymer reaction engineering and inclusive innovation', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raghunath%20Mashelkar.jpg', placeholder: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/Raghunath_Mashelkar', color: 'sky' },
  { name: 'A. S. Kiran Kumar', field: 'Space', origin: 'India', role: 'Space systems scientist', fact: 'Led development of payloads for missions including Chandrayaan-1 and Mars Orbiter', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A._S._Kiran_Kumar.jpg', placeholder: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/A._S._Kiran_Kumar', color: 'yellow' },
  { name: 'Subbiah Arunan', field: 'Space', origin: 'India', role: 'Planetary mission leader', fact: 'Led Chandrayaan-3, India’s first successful soft landing near the lunar south pole', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Subbiah%20Arunan.jpg', placeholder: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85', source: 'https://en.wikipedia.org/wiki/Subbiah_Arunan', color: 'coral' },
  { name: 'Sanghamitra Bandyopadhyay', field: 'Computing', origin: 'India', role: 'Computer scientist', fact: 'Built influential work in machine learning, bioinformatics and computational biology', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanghamitra%20Bandyopadhyay.jpg', placeholder: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85', source: 'https://www.isical.ac.in/~sanghamitra/', color: 'lilac' },
]
const fields = ['All fields', 'Space', 'Medicine', 'Engineering', 'Chemistry', 'Computing']

function App() {
  const [activeField, setActiveField] = useState('All fields')
  const [query, setQuery] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [savedNames, setSavedNames] = useState([])
  const filteredScientists = useMemo(() => scientists.filter((scientist) => {
    const matchesField = activeField === 'All fields' || scientist.field === activeField
    const matchesQuery = scientist.name.toLowerCase().includes(query.toLowerCase()) || scientist.fact.toLowerCase().includes(query.toLowerCase()) || scientist.origin?.toLowerCase().includes(query.toLowerCase())
    return matchesField && matchesQuery
  }), [activeField, query])

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="The Bright Index home"><span className="brand-mark">✳</span><span>the bright<br /><em>index / india</em></span></a>
        <div className="nav-links"><a href="#discover">Discover</a><a href="#dispatches">Dispatches</a><a href="#about">About</a></div>
        <button className="nav-button" onClick={() => setSubscribed(!subscribed)}>{subscribed ? 'You’re in ✓' : 'Join the circle'}</button>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> India’s living index of curious minds</p><h1>India making<br /><span>tomorrow</span> possible.</h1><p className="hero-intro">A public field guide to the Indian scientists expanding our understanding of life, matter, space and computation.</p><a className="arrow-link" href="#discover">Meet the minds <span>↘</span></a></div>
        <div className="hero-art" aria-label="Abstract illustration of a scientific breakthrough" role="img"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun-core">✳</div><span className="star star-a">✦</span><span className="star star-b">✧</span><span className="star star-c">✦</span><span className="hero-note">CURIOUS<br />BY NATURE</span></div>
      </section>
      <section className="ticker"><span>For a more curious India</span><span>✳</span><span>Science belongs in public life</span><span>✳</span><span>Wonder is a national resource</span></section>
      <section className="discover-section" id="discover">
        <div className="section-heading"><div><p className="eyebrow">The India index / 01</p><h2>Start with a<br /><i>bright spark.</i></h2></div><p className="section-description">The people here are helping India ask better questions, build boldly and grow a scientific temperament in public.</p></div>
        <div className="controls"><div className="filter-list" role="tablist" aria-label="Filter by scientific field">{fields.map((field) => <button key={field} className={activeField === field ? 'active' : ''} onClick={() => setActiveField(field)}>{field}</button>)}</div><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a mind" aria-label="Find a scientist" /></label></div>
        <div className="scientist-grid">{filteredScientists.map((scientist, index) => { const isSaved = savedNames.includes(scientist.name); return <article className={`scientist-card ${scientist.color}`} key={scientist.name}><div className="portrait-wrap"><img src={scientist.image} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = scientist.placeholder || scientist.image }} alt={`${scientist.name}, ${scientist.role}`} /><span className="card-number">{String(index + 1).padStart(2, '0')}</span><button className={`save-button ${isSaved ? 'saved' : ''}`} onClick={() => setSavedNames(isSaved ? savedNames.filter((name) => name !== scientist.name) : [...savedNames, scientist.name])} aria-label={`${isSaved ? 'Remove' : 'Save'} ${scientist.name}`}>{isSaved ? '♥' : '♡'}</button></div><div className="card-body"><p className="card-field">{scientist.field}</p><h3>{scientist.name}</h3><p className="card-role">{scientist.role}</p><div className="card-divider" /><p className="card-fact"><span>↗</span> {scientist.fact}</p><a className="source-link" href={scientist.source} target="_blank" rel="noreferrer">Read the source</a></div></article> })}</div>
        {filteredScientists.length === 0 && <p className="empty-state">No bright sparks found. Try another search.</p>}
      </section>
      <section className="dispatch" id="dispatches"><div className="dispatch-symbol">✳</div><div><p className="eyebrow">The bright dispatch / India</p><h2>Small notes on<br /><i>big thinking.</i></h2></div><div className="dispatch-copy"><p>One thoughtful email, every other week. Discover Indian breakthroughs, follow the people behind them and bring science into the conversation.</p><button className="subscribe-button" onClick={() => setSubscribed(true)}>{subscribed ? 'You’re on the list ✓' : 'Join the dispatch'} <span>↗</span></button></div></section>
      <footer id="about"><span>© 2026 The Bright Index / India</span><span>{savedNames.length ? `${savedNames.length} minds saved` : 'Made for a scientifically curious India'} <b>✳</b></span></footer>
    </main>
  )
}
export default App
