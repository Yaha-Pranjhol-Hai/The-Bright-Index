
# The Bright Index

The Bright Index is an early attempt to make science easier to notice, understand, and pursue in India.

The first thing people should see is good India-first news: a new mission, a research result, a discovery, a useful invention, a climate development, or a problem that scientists are working on. But a headline is only the beginning. The product should help a curious person understand what happened, why it matters, and where to go next.

The larger goal is to encourage a scientific temperament: curiosity, evidence, healthy doubt, and the habit of asking better questions. India has no shortage of talented people or important work. Too much of it is difficult to find, buried in technical papers, scattered across institutions, or presented without enough context to make someone want to keep exploring.

## What I am building

- A dated reading room for India-first science and technology news
- Short field notes that add context without pretending to be the whole article
- Links to original articles, papers, institutions, datasets, and reliable sources
- Rabbit holes that connect one story to related ideas and discoveries
- Opportunities such as fellowships, olympiads, internships, labs, courses, grants, and citizen-science projects
- Profiles of Indian researchers, builders, institutions, and open problems
- Regional-language support as the project grows
- Curious-minds features such as the Millennium Prize Problems and other open questions

The intended journey is simple:

**See something interesting -> understand it -> explore further -> find a way to participate.**

## Our way

The Bright Index is a shared project, not one person’s science feed. We want to celebrate the people doing difficult, patient work and make their ideas easier to encounter. We also want to be honest about what we do not know.

- **Science is for everyone.** You do not need a particular background to begin asking a good question.
- **People before hype.** We celebrate researchers, teachers, builders, students, and communities, not only dramatic results.
- **Briefly here, deeply elsewhere.** The site gives context and a starting point; original articles, papers, and data remain important.
- **Popularity is a signal, not a verdict.** Community interest can help choose what to investigate next, but likes cannot establish truth.
- **No hidden gatekeeper.** Proposals, corrections, credits, and decisions should be visible and open to challenge.
- **Leave the place healthier.** Explain clearly, credit generously, correct openly, and make room for uncertainty.

This is not meant to be another headline stream or a place for science-flavoured clickbait. It should make people more curious, more capable of judging claims, and more aware of the paths available to them. If someone wants to know more, the short note should take them to the original article, paper, or source list rather than trying to replace it.

## Latest means latest

The project separates current reading from background explainers. An item only appears in the **Latest** reading room when its source publication date is visible and its author, source, and last-checked date have been recorded. Older or undated material belongs in **Field Notes** and is labelled that way.

The project will not quietly recycle old news as new news. Each published item should show:

- The original author or institution
- The original publication date
- The source article or paper
- The person or community contributor who prepared the note
- The date the source was last checked
- Corrections or updates when the evidence changes

## Sources and reading

Useful starting points include Nature India, Current Science, Journal of Biosciences, Resonance, Science Reporter, Down To Earth, The Conversation, and Quanta Magazine. These sources serve different purposes and have different editorial standards. The Bright Index links to them; it does not treat every source as equally authoritative or replace reading the original work.

## Why this matters

Scientific progress depends on more than a few excellent labs. It needs students who can see themselves in science, citizens who can tell evidence from assertion, and builders who can find the people, tools, and opportunities needed to start.

The Bright Index is intended to be a small piece of that public infrastructure: a trustworthy place to encounter Indian science and follow it somewhere useful.

## Current status

This repository is at the beginning. The current interface is a prototype and the product direction is still being tested. The first proper milestone is a small, carefully edited collection of India-first stories and opportunities, rather than a large feed that is difficult to trust or maintain.

## Principles

- **Curiosity before certainty.** Good coverage makes room for questions and uncertainty.
- **Evidence over excitement.** Stories should link to sources and distinguish results from claims.
- **Context without condescension.** Technical ideas can be explained clearly without making them shallow.
- **India first, not India only.** Indian work and problems lead the story, with global context where it helps.
- **Every story should open a door.** A reader should have somewhere meaningful to go next.
- **Credit is part of the evidence.** Authors, institutions, sources, and contributors should be visible.
- **Popularity is not proof.** Community interest can decide what gets investigated next, but it cannot override evidence or editorial checks.
- **No single owner of the agenda.** The project should be shaped by open proposals, discussion, corrections, and transparent decisions rather than one person’s private taste.
- **Build in public.** Corrections, criticism, and contributions are welcome.

## Contributing

There is plenty to help with, including:

- Finding strong India-focused science sources
- Suggesting stories, researchers, institutions, and opportunities
- Checking facts, links, dates, and explanations
- Improving wording and translations
- Suggesting useful rabbit holes and learning paths
- Reporting bugs and confusing parts of the interface
- Building the editorial, search, and contribution workflows

The contribution process is intentionally public. A reader can suggest an article, field note, opportunity, or correction through GitHub Issues. Contributors should receive credit, and the review history should remain visible. The community can use interest signals to choose what deserves attention next, while source quality and factual review remain non-negotiable.

Please open an issue before starting a large change. For small fixes, a pull request with a short explanation is welcome.

## Data and contributor access

The content in this prototype is written in `src/data/content.js` so the idea can be tested without pretending that a live editorial system already exists. The next production step is to move stories, sources, opportunities, credits, corrections, and Tinker problems into a hosted database such as Supabase’s free tier.

The access model should be:

- Public visitors can read published records without seeing database credentials.
- Contributors can submit proposals and drafts through a normal authenticated workflow.
- Reviewers can check sources, dates, author credit, and corrections.
- Moderators can publish or reject records, with the decision history kept visible.
- Roles are earned through useful, sustained contributions and approved by the community, not granted by an automatic popularity score.

API keys must never be distributed to browser users or sent automatically to contributors. Provider keys belong in server-side environment variables or a secrets manager. A server or serverless function should enforce roles and issue narrowly scoped access tokens only when a real integration requires them. If a contributor needs access to a dataset, give them a database role or a curated export, not the master key.

## Tinker

Tinker is where the project connects everyday Indian problems with scientific thinking. Each problem should show:

- The question worth investigating
- What research already knows
- What is still uncertain or locally incomplete
- An original source to begin with
- A small next step someone can try

The research-status labels are deliberately modest. “Active research” does not mean an answer is close, and “well studied” does not mean the problem is solved. The purpose is to draw people into the work without overselling certainty.

## Millennium Prize Problems

The Curious Minds section introduces the seven Millennium Prize Problems selected by the Clay Mathematics Institute in 2000. Each problem carries a US$1 million prize for a correct solution. The Poincare Conjecture was solved by Grigori Perelman in 2003; the other six remain open according to the Institute’s official list.

The site presents these as invitations to learn, not promises that an internet discussion can replace mathematical research. Every problem links back to the Clay Mathematics Institute so readers can explore the original statement and its context.

## Community page

The landing page is for discovery: people, science, opportunities, open problems, and short explanations. The longer governance and contributor information lives on the separate [community page](https://github.com/Yaha-Pranjhol-Hai/The-Bright-Index). It explains how proposals are checked, how credit works, how corrections remain visible, and how the community can shape the project without turning popularity into proof.

## Supabase setup

The repository includes a starter schema in `supabase/schema.sql` and a safe client wrapper in `src/lib/supabase.js`.

1. Create a Supabase project on the free tier.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Add the project URL and publishable anon key to `.env.local`.
5. Keep `.env.local` out of Git. Never use a service-role key in Vite or the browser.

The current app intentionally falls back to local content when those variables are absent. Before connecting live submissions, add authentication and reviewer policies for the `in_review` and `published` states. Public inserts should be rate-limited and validated by a server or edge function.

## Running locally

You will need Node.js installed.

```bash
npm install
npm run dev
```

The production build can be checked with:

```bash
npm run build
```

## Roadmap

- Define the first science and technology coverage areas
- Publish a small set of carefully sourced India-first stories
- Build story pages with explainers, sources, and related rabbit holes
- Add opportunities and ways for readers to participate
- Add corrections, contributor credit, and editorial review
- Expand into more subjects, regions, and Indian languages

The project is intentionally small for now. The goal is to make someone genuinely curious about one thing, then help them take the next step.

## What happens next

1. Build the first community-shaped reading room with dated source articles.
2. Add author, publication date, contributor credit, and last-checked details to every item.
3. Turn the strongest field notes into deeper rabbit holes and practical opportunities.
4. Create a public review history so corrections and disagreements are part of the record.
5. Let readers and contributors help decide what the project investigates next.
