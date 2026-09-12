# The Bright Index

**India-first science, with context and a way forward.**

The Bright Index helps people discover Indian scientists, research, opportunities, datasets, and open questions, then take a useful next step.

> See something interesting -> understand it -> check the source -> act.

## What it offers

- Field notes that explain science without hiding uncertainty
- Profiles of Indian scientists and builders
- Scholarships, courses, competitions, and citizen-science opportunities
- A Science Commons for datasets, portals, universities, journals, museums, and observatories
- Tinker questions connecting everyday problems to research
- Public contributions, corrections, and source links

All public content is fetched from Supabase. There is no local content fallback.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Supabase

Add these variables locally and in Vercel:

```dotenv
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

The app reads published rows from `public.content_items`:

| `kind` | Used for |
| --- | --- |
| `story` | Field notes |
| `scientist` | People profiles |
| `opportunity` | Opportunities on the main page |
| `deadline` | Calendar listings |
| `resource` | Science Commons |
| `tinker` | Open research questions |
| `millennium_problem` | Millennium problems |
| `source` | Reading sources |
| `editorial_rule` | Community charter |

A row appears publicly only when `published = true`. The display data belongs in the `payload` JSON column.

### Add a scientist

1. Open Supabase Dashboard -> **Table Editor** -> `content_items`.
2. Click **Insert row**.
3. Set `kind` to `scientist`, add a unique `slug`, and set `published` to `true`.
4. Paste the scientist object into `payload`.
5. Save and refresh the site.

You can also run SQL in **SQL Editor**. See [docs/seed-more-scientists.sql](docs/seed-more-scientists.sql) for ten additional scientist records. It is safe to run more than once.

Check the data with:

```sql
select slug, payload->>'name' as name, payload->>'field' as field, published
from public.content_items
where kind = 'scientist'
order by name;
```

Never put a Supabase service-role key in Vite, Git, or the browser. Use only the publishable key on the frontend.

## Contribute

Suggest a scientist, source, opportunity, correction, or research question through the public contribution flow or GitHub Issues. Include an official source, date, and enough context for someone else to check the claim.

The project values evidence over hype, context over clickbait, and curiosity over certainty.
