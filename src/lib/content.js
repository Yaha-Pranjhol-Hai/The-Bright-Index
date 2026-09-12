import { supabase } from './supabase'

export async function loadPublishedContent() {
  if (!supabase) {
    const error = 'Supabase environment variables are missing at build time.'
    console.error(`[Supabase] ${error}`)
    return { source: 'error', content: null, error }
  }

  const { data, error } = await supabase
    .from('published_content')
    .select('kind, payload')
    .eq('published', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('[Supabase] Failed to load published_content:', error.message)
    return { source: 'error', content: null, error: error.message }
  }
  if (!data?.length) return { source: 'error', content: null, error: 'Supabase is connected, but published_content is empty.' }

  const remoteContent = {
    newsStories: data.filter((item) => item.kind === 'story').map((item) => item.payload),
    opportunities: data.filter((item) => item.kind === 'opportunity').map((item) => item.payload),
    tinkerProblems: data.filter((item) => item.kind === 'tinker').map((item) => item.payload),
  }

  return {
    source: 'database',
    content: remoteContent,
    error: null,
  }
}
