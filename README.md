
# The Bright Index

**India-first science, with context and a way forward.**

The Bright Index is a public guide to the researchers, discoveries, questions, and opportunities shaping science in India. It helps a curious reader move from a headline to understanding, from understanding to evidence, and from evidence to action.

**See something interesting -> understand it -> check the source -> take the next step.**

## What is here

- **Field notes:** short explainers that answer what happened and why it matters
- **Sources and rabbit holes:** original links and related ideas for deeper reading
- **People:** Indian scientists and builders worth knowing
- **Opportunities:** fellowships, courses, labs, projects, and citizen science
- **Tinker:** everyday problems framed as research questions
- **Curious minds:** open questions such as the Millennium Prize Problems

This is not a replacement for original research or reporting. It is a clear starting point that keeps evidence, uncertainty, and credit visible.

## Project status

The Bright Index is an early prototype being built in public. The current site has a live Supabase-backed content layer, local starter data, source links, filters, field notes, opportunities, open problems, and a public contribution path through GitHub Issues.

The short public story is in [docs/x-thread.md](docs/x-thread.md).

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

All public content is served from Supabase. The frontend does not ship a local content fallback.

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

The app reads published content from Supabase through the safe client wrapper in `src/lib/supabase.js`.

1. Create a Supabase project on the free tier.
2. Create the `content_items` table and enable its public read policy in Supabase.
3. Add these variables to `.env.local` or your hosting provider:

	```dotenv
	VITE_SUPABASE_URL=your-project-url
	VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
	```
4. Keep `.env.local` out of Git. Never use a service-role key in Vite or the browser.

The app requires Supabase for all public content. If the database is unavailable, it shows an unavailable state instead of substituting local content. Before connecting live submissions, add authentication and reviewer policies for the `in_review` and `published` states. Public inserts should be rate-limited and validated by a server or edge function.

To add or edit content, use Supabase Dashboard → Table Editor → `content_items`, or run SQL in the SQL Editor. Scientists use `kind = 'scientist'`; stories use `kind = 'story'`; opportunities use `kind = 'opportunity'`; Tinker problems use `kind = 'tinker'`. Each row stores the display data in `payload` as JSON and must have `published = true` to appear publicly.

Example scientist insert:

```sql
insert into public.content_items (kind, slug, payload, published)
values (
	'scientist',
	'new-scientist-slug',
	'{"name":"Scientist name","field":"Space","origin":"India","role":"Researcher","fact":"A short verified fact","image":"https://example.com/image.jpg","placeholder":"https://example.com/fallback.jpg","source":"https://official-source.example","color":"sky"}'::jsonb,
	true
);
```

To inspect scientists:

```sql
select slug, payload->>'name' as name, payload->>'field' as field, published
from public.content_items
where kind = 'scientist'
order by payload->>'name';
```

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
