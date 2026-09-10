import { supabase } from './supabase'
import { newsStories, opportunities, tinkerProblems } from '../data/content'

export async function loadPublishedContent() {
  if (!supabase) return { source: 'local', content: null, error: 'Supabase environment variables are missing.' }

  const { data, error } = await supabase
    .from('published_content')
    .select('kind, payload')
    .eq('published', true)
    .order('created_at', { ascending: true })

  if (error) return { source: 'local', content: null, error: error.message }
  if (!data?.length) return { source: 'local', content: null, error: 'Supabase is connected, but published_content is empty.' }

  const remoteContent = {
    newsStories: data.filter((item) => item.kind === 'story').map((item) => item.payload),
    opportunities: data.filter((item) => item.kind === 'opportunity').map((item) => item.payload),
    tinkerProblems: data.filter((item) => item.kind === 'tinker').map((item) => item.payload),
  }

  return {
    source: 'database',
    content: {
      newsStories: remoteContent.newsStories.length ? remoteContent.newsStories : newsStories,
      opportunities: remoteContent.opportunities.length ? remoteContent.opportunities : opportunities,
      tinkerProblems: remoteContent.tinkerProblems.length ? remoteContent.tinkerProblems : tinkerProblems,
    },
    error: null,
  }
}
