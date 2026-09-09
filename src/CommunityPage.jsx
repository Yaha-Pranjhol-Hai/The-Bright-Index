import { editorialPolicy } from './data/content'
import './App.css'

function CommunityPage() {
  return (
    <main className="community-page">
      <nav className="nav-shell">
        <a className="brand" href="/" aria-label="The Bright Index home"><span className="brand-mark">✳</span><span>the bright<br /><em>index / india</em></span></a>
        <a className="nav-button" href="/">Back to the index</a>
      </nav>
      <section className="community-hero">
        <p className="eyebrow">The Bright Index / community</p>
        <h1>A shared project<br /><span>in the open.</span></h1>
        <p>There is no hidden editor deciding what India should care about. Readers, contributors, researchers, and moderators help shape the questions, while sources and corrections keep the work honest.</p>
      </section>
      <section className="community-content">
        <div className="community-intro"><p className="eyebrow">How it works / 01</p><h2>Interest can<br /><i>set direction.</i></h2><p>Evidence still sets the standard. A popular suggestion may tell us where curiosity is gathering, but it cannot make a weak claim strong.</p></div>
        <div className="community-steps"><article><span>01</span><h3>Suggest</h3><p>Bring an article, question, opportunity, correction, or problem worth investigating.</p></article><article><span>02</span><h3>Check</h3><p>Contributors trace sources, dates, authors, uncertainty, and conflicts before publication.</p></article><article><span>03</span><h3>Discuss</h3><p>The community can question the framing and help decide what deserves deeper work.</p></article><article><span>04</span><h3>Credit</h3><p>Useful work is attributed. Corrections remain visible. Nobody needs to become a gatekeeper to contribute.</p></article></div>
      </section>
      <section className="community-content dark-community">
        <div className="community-intro"><p className="eyebrow">The charter / 02</p><h2>Leave it<br /><i>healthier.</i></h2></div>
        <div className="community-rules">{editorialPolicy.map((rule, index) => <p key={rule}><span>{String(index + 1).padStart(2, '0')}</span>{rule}</p>)}</div>
      </section>
      <section className="community-content database-note">
        <div className="community-intro"><p className="eyebrow">The data layer / 03</p><h2>Open contribution.<br /><i>Protected secrets.</i></h2></div>
        <div><p>Published content will live in a hosted database with row-level permissions. Visitors can read approved records. Contributors can submit drafts. Reviewers can check them. Moderators can publish them.</p><p>Database service keys will never be placed in the browser or handed to contributors. Access is earned through roles and limited permissions, not shared master credentials.</p><a className="arrow-link" href="https://github.com/Yaha-Pranjhol-Hai/The-Bright-Index/issues" target="_blank" rel="noreferrer">See the public discussion <span>↗</span></a></div>
      </section>
      <footer><span>© 2026 The Bright Index / India</span><span>Build in public <b>✳</b></span></footer>
    </main>
  )
}

export default CommunityPage
