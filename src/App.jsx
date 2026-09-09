import { useMemo, useState } from 'react'
import './App.css'
import { newsStories, newsTopics, opportunities } from './data/content'

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
  const [activeTopic, setActiveTopic] = useState('All signals')
  const [query, setQuery] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [savedNames, setSavedNames] = useState([])
  const [selectedStory, setSelectedStory] = useState(null)
  const [contributorSent, setContributorSent] = useState(false)
  const submitContributor = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('title')
    const note = formData.get('note')
    const source = formData.get('source')
    const body = `Suggested by a reader.\n\n${note}\n\nSource or starting point: ${source}`
    window.open(`https://github.com/Yaha-Pranjhol-Hai/The-Bright-Index/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
    setContributorSent(true)
  }
  const filteredScientists = useMemo(() => scientists.filter((scientist) => {
    const matchesField = activeField === 'All fields' || scientist.field === activeField
    const matchesQuery = scientist.name.toLowerCase().includes(query.toLowerCase()) || scientist.fact.toLowerCase().includes(query.toLowerCase()) || scientist.origin?.toLowerCase().includes(query.toLowerCase())
    return matchesField && matchesQuery
  }), [activeField, query])
  const filteredStories = useMemo(() => newsStories.filter((story) => activeTopic === 'All signals' || story.topic === activeTopic), [activeTopic])

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="The Bright Index home"><span className="brand-mark">✳</span><span>the bright<br /><em>index / india</em></span></a>
        <div className="nav-links"><a href="#signals">Signals</a><a href="#opportunities">Opportunities</a><a href="#contribute">Contribute</a></div>
        <button className="nav-button" onClick={() => setSubscribed(!subscribed)}>{subscribed ? 'You’re in ✓' : 'Join the circle'}</button>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> India’s living science brief</p><h1>India making<br /><span>tomorrow</span> possible.</h1><p className="hero-intro">India-first science news, clear context, and the people and opportunities that make curiosity useful.</p><a className="arrow-link" href="#signals">Read today’s signal <span>↘</span></a></div>
        <div className="hero-art" aria-label="Abstract illustration of a scientific breakthrough" role="img"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun-core">✳</div><span className="star star-a">✦</span><span className="star star-b">✧</span><span className="star star-c">✦</span><span className="hero-note">CURIOUS<br />BY NATURE</span></div>
      </section>
      <section className="ticker"><span>For a more curious India</span><span>✳</span><span>Science belongs in public life</span><span>✳</span><span>Wonder is a national resource</span></section>
      <section className="signals-section" id="signals">
        <div className="section-heading signals-heading"><div><p className="eyebrow">The bright signal / 01</p><h2>What India is<br /><i>learning now.</i></h2></div><p className="section-description">A small, sourced briefing for people who want more than a headline and a clear path into the subject.</p></div>
        <div className="signal-controls" role="tablist" aria-label="Filter science signals by topic">{newsTopics.map((topic) => <button key={topic} className={activeTopic === topic ? 'active' : ''} onClick={() => setActiveTopic(topic)}>{topic}</button>)}</div>
        <div className="signal-grid">
          {filteredStories.map((story, index) => index === 0 && activeTopic === 'All signals' ? <article className={`feature-story ${story.tone}`} key={story.title}><div className="feature-index">01 / FEATURED</div><div className="feature-copy"><p className="story-type">{story.type} / {story.topic}</p><h3>{story.title}</h3><p className="story-summary">{story.summary}</p><p className="story-why"><strong>Why it matters</strong>{story.why}</p><a className="source-link" href={story.link} target="_blank" rel="noreferrer">Read the source ↗</a><button className="story-open" onClick={() => setSelectedStory(story)}>Open the field note <span>↗</span></button></div><div className="feature-orbit" aria-hidden="true"><span>☼</span><i /><i /><b>ADITYA<br />L1</b></div></article> : <article className={`signal-card ${story.tone}`} key={story.title}><p className="story-type">{String(index + 1).padStart(2, '0')} / {story.topic}</p><h3>{story.title}</h3><p>{story.summary}</p><a className="source-link" href={story.link} target="_blank" rel="noreferrer">{story.source} ↗</a><button className="story-open" onClick={() => setSelectedStory(story)}>Follow the thread <span>↗</span></button></article>)}
        </div>
        <p className="editor-note">Editorial prototype / Sources are included so every story can be checked, questioned, and explored further.</p>
      </section>
      {selectedStory && <div className="story-modal-backdrop" role="presentation" onClick={() => setSelectedStory(null)}><article className="story-modal" role="dialog" aria-modal="true" aria-labelledby="story-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedStory(null)} aria-label="Close field note">×</button><p className="eyebrow">{selectedStory.topic} / field note</p><h2 id="story-title">{selectedStory.title}</h2><p className="modal-summary">{selectedStory.explanation}</p><div className="modal-columns"><div><p className="modal-label">Why it matters</p><p>{selectedStory.why}</p></div><div><p className="modal-label">Follow this rabbit hole</p><p>{selectedStory.rabbitHole}</p></div></div><div className="modal-next"><p className="modal-label">A way to explore further</p><p>{selectedStory.opportunity}</p><a className="source-link" href={selectedStory.link} target="_blank" rel="noreferrer">Check the original source: {selectedStory.source} ↗</a></div></article></div>}
      <section className="discover-section" id="discover">
        <div className="section-heading"><div><p className="eyebrow">The India index / 02</p><h2>Follow the<br /><i>people behind it.</i></h2></div><p className="section-description">Meet the scientists and builders whose questions, experiments, and persistence are expanding what India can do.</p></div>
        <div className="controls"><div className="filter-list" role="tablist" aria-label="Filter by scientific field">{fields.map((field) => <button key={field} className={activeField === field ? 'active' : ''} onClick={() => setActiveField(field)}>{field}</button>)}</div><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a mind" aria-label="Find a scientist" /></label></div>
        <div className="scientist-grid">{filteredScientists.map((scientist, index) => { const isSaved = savedNames.includes(scientist.name); return <article className={`scientist-card ${scientist.color}`} key={scientist.name}><div className="portrait-wrap"><img src={scientist.image} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = scientist.placeholder || scientist.image }} alt={`${scientist.name}, ${scientist.role}`} /><span className="card-number">{String(index + 1).padStart(2, '0')}</span><button className={`save-button ${isSaved ? 'saved' : ''}`} onClick={() => setSavedNames(isSaved ? savedNames.filter((name) => name !== scientist.name) : [...savedNames, scientist.name])} aria-label={`${isSaved ? 'Remove' : 'Save'} ${scientist.name}`}>{isSaved ? '♥' : '♡'}</button></div><div className="card-body"><p className="card-field">{scientist.field}</p><h3>{scientist.name}</h3><p className="card-role">{scientist.role}</p><div className="card-divider" /><p className="card-fact"><span>↗</span> {scientist.fact}</p><a className="source-link" href={scientist.source} target="_blank" rel="noreferrer">Read the source</a></div></article> })}</div>
        {filteredScientists.length === 0 && <p className="empty-state">No bright sparks found. Try another search.</p>}
      </section>
      <section className="opportunity-section" id="opportunities">
        <div className="section-heading"><div><p className="eyebrow">The next step / 03</p><h2>Curiosity needs<br /><i>a way forward.</i></h2></div><p className="section-description">A separate layer for fellowships, labs, courses, and projects that turn interest into practice.</p></div>
        <div className="opportunity-grid">{opportunities.map((opportunity) => <article className={`opportunity-card ${opportunity.tone}`} key={opportunity.title}><p className="story-type">{opportunity.type}</p><h3>{opportunity.title}</h3><p className="opportunity-audience">For {opportunity.audience}</p><p>{opportunity.description}</p><a className="source-link" href={opportunity.link} target="_blank" rel="noreferrer">{opportunity.source} ↗</a></article>)}</div>
        <p className="editor-note">Opportunity layer / Check each organisation’s official page for current dates, eligibility, and availability.</p>
      </section>
      <section className="contributor-section" id="contribute">
        <div className="contributor-intro"><p className="eyebrow">Open editorial desk / 04</p><h2>Make it<br /><i>checkable.</i></h2><p>The Bright Index should be a healthy place to learn. That means showing sources, naming uncertainty, crediting contributors, and making corrections visible.</p><div className="editorial-checklist"><p><span>01</span> Every claim has a source.</p><p><span>02</span> Every opportunity has a date check.</p><p><span>03</span> Corrections stay visible.</p></div></div>
        <form className="contributor-form" onSubmit={submitContributor}><p className="story-type">Suggest a signal, opportunity, or correction</p><label>Short title<input name="title" required placeholder="What should we look at?" /></label><label>Source link<input name="source" type="url" required placeholder="https://..." /></label><label>What do you know?<textarea name="note" required rows="4" placeholder="Add context, a correction, or why this matters." /></label><button className="subscribe-button" type="submit">Open a public issue <span>↗</span></button>{contributorSent && <p className="form-confirmation">Your suggestion is ready to review in GitHub Issues.</p>}</form>
      </section>
      <section className="dispatch" id="dispatches"><div className="dispatch-symbol">✳</div><div><p className="eyebrow">The bright dispatch / India</p><h2>Small notes on<br /><i>big thinking.</i></h2></div><div className="dispatch-copy"><p>One thoughtful email, every other week. Discover Indian breakthroughs, follow the people behind them and bring science into the conversation.</p><button className="subscribe-button" onClick={() => setSubscribed(true)}>{subscribed ? 'You’re on the list ✓' : 'Join the dispatch'} <span>↗</span></button></div></section>
      <footer id="about"><span>© 2026 The Bright Index / India</span><span>{savedNames.length ? `${savedNames.length} minds saved` : 'Made for a scientifically curious India'} <b>✳</b></span></footer>
    </main>
  )
}
export default App
