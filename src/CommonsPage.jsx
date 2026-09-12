import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { loadPublishedContent } from './lib/content'

function CommonsPage() {
  const [activeCategory, setActiveCategory] = useState('All resources')
  const [query, setQuery] = useState('')
  const [resources, setResources] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    loadPublishedContent().then((result) => {
      if (result.source === 'database') setResources(result.content.resources ?? [])
      else setError(result.error)
    })
  }, [])
  const commonsCategories = ['All resources', ...new Set((resources ?? []).map((resource) => resource.category).filter(Boolean))]
  const filteredResources = useMemo(() => (resources ?? []).filter((resource) => {
    const matchesCategory = activeCategory === 'All resources' || resource.category === activeCategory
    const haystack = `${resource.name} ${resource.description} ${resource.source}`.toLowerCase()
    return matchesCategory && haystack.includes(query.toLowerCase())
  }), [activeCategory, query, resources])

  if (!resources) return <main className="data-state"><div><p className="eyebrow">The science commons</p><h1>{error ? 'The commons is unavailable.' : 'Loading the commons.'}</h1><p>{error ?? 'Connecting to the community database.'}</p></div></main>

  return (
    <main className="directory-page">
      <nav className="nav-shell">
        <a className="brand" href="/" aria-label="The Bright Index home"><span className="brand-mark">✳</span><span>the bright<br /><em>index / india</em></span></a>
        <div className="nav-links"><a href="/?page=calendar">Deadlines</a><a href="/">Back to index</a></div>
        <a className="nav-button" href="/?page=calendar">Find an opportunity</a>
      </nav>
      <section className="directory-hero">
        <div><p className="eyebrow">The science commons / 08</p><h1>Good places<br /><span>to begin.</span></h1><p>A practical shelf of Indian datasets, institutions, journals, museums, observatories, and citizen-science projects. Less wandering. More starting.</p></div>
        <div className="directory-number">12<br /><small>starting points</small></div>
      </section>
      <section className="directory-content">
        <div className="directory-toolbar"><div className="directory-tabs" role="tablist" aria-label="Filter science resources">{commonsCategories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><label className="directory-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the commons" aria-label="Search the science commons" /></label></div>
        <div className="directory-grid">{filteredResources.map((resource, index) => <article className={`directory-card ${resource.tone}`} key={resource.name}><div className="directory-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{resource.access}</span></div><p className="story-type">{resource.category}</p><h2>{resource.name}</h2><p>{resource.description}</p><div className="directory-card-footer"><span>{resource.source}</span><a className="source-link" href={resource.link} target="_blank" rel="noreferrer">Open resource ↗</a></div></article>)}</div>
        {!filteredResources.length && <p className="empty-state">No resource matches that search.</p>}
      </section>
      <section className="directory-note"><div><p className="eyebrow">How to use it</p><h2>Start with a question.<br /><i>Not a website.</i></h2></div><p>Each link is a doorway, not a verdict. Check the date, owner, methods, access rules, and context. The best resource is the one that helps you ask a sharper question next.</p></section>
      <footer><span>© 2026 The Bright Index / India</span><span>Open science, useful next steps <b>✳</b></span></footer>
    </main>
  )
}

export default CommonsPage
