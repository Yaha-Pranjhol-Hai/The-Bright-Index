-- Run this once in Supabase SQL Editor after creating content_items.
-- Safe to run again: each scientist is updated by slug.

insert into public.content_items (kind, slug, payload, published)
values
('scientist', 'ritu-karidhal-srivastava', '{"name":"Ritu Karidhal Srivastava","field":"Space","origin":"India","role":"Mission director","fact":"Served as deputy operations director for India’s Mars Orbiter Mission","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Ritu%20Karidhal.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Ritu_Karidhal","color":"sky"}'::jsonb, true),
('scientist', 'mylswamy-annadurai', '{"name":"Mylswamy Annadurai","field":"Space","origin":"India","role":"Lunar mission architect","fact":"Led Chandrayaan-1 and was programme director for the Mars Orbiter Mission","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Mylswamy%20Annadurai.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Mylswamy_Annadurai","color":"yellow"}'::jsonb, true),
('scientist', 'tessy-thomas', '{"name":"Tessy Thomas","field":"Engineering","origin":"India","role":"Aerospace scientist","fact":"Project director for India’s Agni-IV long-range ballistic missile programme","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Tessy%20Thomas.jpg","placeholder":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Tessy_Thomas","color":"coral"}'::jsonb, true),
('scientist', 'gagandeep-kang', '{"name":"Gagandeep Kang","field":"Medicine","origin":"India","role":"Vaccine researcher","fact":"Led research that advanced understanding and prevention of rotavirus disease","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Gagandeep%20Kang.jpg","placeholder":"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85","source":"https://wellcome.org/news/gagandeep-kang-joins-wellcome-trust","color":"lilac"}'::jsonb, true),
('scientist', 'raghunath-mashelkar', '{"name":"Raghunath Mashelkar","field":"Chemistry","origin":"India","role":"Polymer scientist","fact":"Advanced research in polymer reaction engineering and inclusive innovation","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Raghunath%20Mashelkar.jpg","placeholder":"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Raghunath_Mashelkar","color":"sky"}'::jsonb, true),
('scientist', 'a-s-kiran-kumar', '{"name":"A. S. Kiran Kumar","field":"Space","origin":"India","role":"Space systems scientist","fact":"Led development of payloads for missions including Chandrayaan-1 and Mars Orbiter","image":"https://commons.wikimedia.org/wiki/Special:FilePath/A._S._Kiran_Kumar.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/A._S._Kiran_Kumar","color":"yellow"}'::jsonb, true),
('scientist', 'subbiah-arunan', '{"name":"Subbiah Arunan","field":"Space","origin":"India","role":"Planetary mission leader","fact":"Led Chandrayaan-3, India’s first successful soft landing near the lunar south pole","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Subbiah%20Arunan.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Subbiah_Arunan","color":"coral"}'::jsonb, true),
('scientist', 'sanghamitra-bandyopadhyay', '{"name":"Sanghamitra Bandyopadhyay","field":"Computing","origin":"India","role":"Computer scientist","fact":"Built influential work in machine learning, bioinformatics and computational biology","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Sanghamitra%20Bandyopadhyay.jpg","placeholder":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85","source":"https://www.isical.ac.in/~sanghamitra/","color":"lilac"}'::jsonb, true)
on conflict (slug) do update set
  kind = excluded.kind,
  payload = excluded.payload,
  published = excluded.published,
  updated_at = now();

select kind, count(*)
from public.content_items
where kind = 'scientist'
group by kind;
