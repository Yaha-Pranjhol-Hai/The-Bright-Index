import { writeFile } from 'node:fs/promises'
import { newsStories, opportunities, tinkerProblems } from '../src/data/content.js'

const records = [
  ...newsStories.map((payload) => ({ kind: 'story', payload })),
  ...opportunities.map((payload) => ({ kind: 'opportunity', payload })),
  ...tinkerProblems.map((payload) => ({ kind: 'tinker', payload })),
]

const values = records.map(({ kind, payload }) => {
  const escapedKind = kind.replaceAll("'", "''")
  const escapedPayload = JSON.stringify(payload).replaceAll("'", "''")
  return `('${escapedKind}', '${escapedPayload}'::jsonb, true)`
}).join(',\n')

const sql = `-- Generated from src/data/content.js. Review before running in Supabase.\ninsert into public.published_content (kind, payload, published) values\n${values};\n`
await writeFile('supabase/seed.sql', sql)
console.log(`Wrote ${records.length} published content records to supabase/seed.sql`)
