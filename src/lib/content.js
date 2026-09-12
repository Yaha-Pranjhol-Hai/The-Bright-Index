import { supabase } from './supabase'

export async function loadPublishedContent() {
  if (!supabase) {
    const error = 'Supabase environment variables are missing at build time.'
    console.error(`[Supabase] ${error}`)
    return { source: 'error', content: null, error }
  }

  const { data, error } = await supabase
    .from('content_items')
    .select('kind, payload')
    .eq('published', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('[Supabase] Failed to load content_items:', error.message)
    return { source: 'error', content: null, error: error.message }
  }
  if (!data?.length) return { source: 'error', content: null, error: 'Supabase is connected, but content_items is empty.' }

  const remoteContent = {
    newsStories: data.filter((item) => item.kind === 'story').map((item) => item.payload),
    opportunities: data.filter((item) => item.kind === 'opportunity').map((item) => item.payload),
    tinkerProblems: data.filter((item) => item.kind === 'tinker').map((item) => item.payload),
    scientists: data.filter((item) => item.kind === 'scientist').map((item) => item.payload),
    resources: data.filter((item) => item.kind === 'resource').map((item) => item.payload),
    deadlines: data.filter((item) => item.kind === 'deadline').map((item) => item.payload),
    millenniumProblems: data.filter((item) => item.kind === 'millennium_problem').map((item) => item.payload),
    sources: data.filter((item) => item.kind === 'source').map((item) => item.payload),
    editorialPolicy: data.filter((item) => item.kind === 'editorial_rule').map((item) => item.payload),
  }

  return {
    source: 'database',
    content: remoteContent,
    error: null,
  }
}
