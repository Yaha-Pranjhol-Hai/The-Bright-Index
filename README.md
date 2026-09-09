
# The Bright Index

The Bright Index is an early attempt to make useful opportunities and public support easier to find in India.

Scholarships, government schemes, apprenticeships, grants, jobs, legal aid, health services, and local organisations are usually spread across different websites, PDFs, notice boards, and WhatsApp groups. The information is often hard to search, difficult to understand, or out of date by the time someone finds it.

The aim is to build a clear, practical index of these resources, starting small and earning trust one listing at a time.

## What I am building

- Opportunities and services organised by state, district, and category
- Plain-language explanations instead of government jargon
- Filters for things such as eligibility, deadline, age, and location
- Links back to the original source for every listing
- A visible date showing when information was last checked
- A simple way for people to report missing or outdated information
- Support for Indian languages as the project grows

This is not meant to be another general social network. It should help someone answer a much more useful question: **what help or opportunity can I actually use right now?**

## Current status

This repository is at the beginning. The current interface is a prototype and the product direction is still being tested. The first proper milestone is a small, reliable collection of listings for one audience and one region rather than a huge directory that nobody can maintain.

## Principles

- **Useful before impressive.** A person should be able to find a relevant next step quickly.
- **Trust is part of the product.** Sources, dates, and corrections should be visible.
- **Start local.** India is too varied for a one-size-fits-all launch.
- **Keep the language clear.** People should not need specialist knowledge to understand an opportunity.
- **Build in public.** Feedback, corrections, and contributions are welcome.

## Contributing

There is plenty to help with, including:

- Finding trustworthy public sources
- Checking whether a listing is still active
- Improving wording and translations
- Suggesting useful filters or categories
- Reporting bugs and confusing parts of the interface
- Building the data and contribution workflows

Please open an issue before starting a large change. For small fixes, a pull request with a short explanation is welcome.

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

- Define the first audience and region
- Add the first set of manually checked listings
- Build search and useful filters
- Add source, deadline, and last-checked details
- Add correction and contribution flows
- Expand to more regions and languages

The project is intentionally small for now. The goal is to make the first version genuinely useful before trying to cover everything.
