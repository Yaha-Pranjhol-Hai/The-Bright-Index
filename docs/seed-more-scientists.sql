-- Add more scientists in Supabase SQL Editor.
-- Safe to run repeatedly because slug is unique.

insert into public.content_items (kind, slug, payload, published)
values
('scientist', 'c-v-raman', $$
{"name":"C. V. Raman","field":"Physics","origin":"India","role":"Physicist","fact":"Won the 1930 Nobel Prize in Physics for discovering how light changes when it passes through a material.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Cvraman.jpg","placeholder":"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=85","source":"https://www.nobelprize.org/prizes/physics/1930/raman/facts/","color":"sky"}
$$::jsonb, true),
('scientist', 'vikram-sarabhai', $$
{"name":"Vikram Sarabhai","field":"Space","origin":"India","role":"Space scientist and institution builder","fact":"Founded the institutions and national programme that helped place space research at the centre of India’s development plans.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Vikram_Sarabhai.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://www.isro.gov.in/profile-vikram-sarabhai.html","color":"yellow"}
$$::jsonb, true),
('scientist', 'homi-j-bhabha', $$
{"name":"Homi J. Bhabha","field":"Physics","origin":"India","role":"Theoretical physicist","fact":"Established India’s major institutions for nuclear research and helped shape the country’s post-independence science infrastructure.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Homi_Jehangir_Bhabha_1956.jpg","placeholder":"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85","source":"https://www.tifr.res.in/~museum/people/homi-bhabha/","color":"coral"}
$$::jsonb, true),
('scientist', 'a-p-j-abdul-kalam', $$
{"name":"A. P. J. Abdul Kalam","field":"Aerospace","origin":"India","role":"Aerospace scientist","fact":"Contributed to India’s launch-vehicle and missile programmes before becoming a widely known advocate for science education.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/A.P.J._Abdul_Kalam.jpg","placeholder":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85","source":"https://www.presidentofindia.gov.in/dr-apj-abdul-kalam-profile","color":"lilac"}
$$::jsonb, true),
('scientist', 'janaki-ammal', $$
{"name":"E. K. Janaki Ammal","field":"Botany","origin":"India","role":"Botanist and cytogeneticist","fact":"Advanced plant breeding and cytogenetics, including work on sugarcane and the conservation of native plant diversity.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Janaki_Ammal.jpg","placeholder":"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85","source":"https://www.indianacademyofsciences.org/publications/voices/volumes/2013/december/articles/janaki-ammal/","color":"sky"}
$$::jsonb, true),
('scientist', 'anna-mani', $$
{"name":"Anna Mani","field":"Earth science","origin":"India","role":"Meteorologist","fact":"Built India’s capacity to measure weather and solar radiation through instruments, observations, and national meteorological services.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Anna_Mani.jpg","placeholder":"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=85","source":"https://en.wikipedia.org/wiki/Anna_Mani","color":"yellow"}
$$::jsonb, true),
('scientist', 'u-r-rao', $$
{"name":"U. R. Rao","field":"Space","origin":"India","role":"Space scientist","fact":"Led the development of India’s early satellite programme and helped expand the country’s space applications.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/U._R._Rao.jpg","placeholder":"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85","source":"https://www.isro.gov.in/profile-ur-rao.html","color":"coral"}
$$::jsonb, true),
('scientist', 'm-s-swaminathan', $$
{"name":"M. S. Swaminathan","field":"Agriculture","origin":"India","role":"Agricultural scientist","fact":"Helped develop the research and public systems associated with India’s Green Revolution and later championed sustainable food security.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/M._S._Swaminathan.jpg","placeholder":"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=85","source":"https://www.mssrf.org/about-us/dr-m-s-swaminathan/","color":"lilac"}
$$::jsonb, true),
('scientist', 'g-n-ramachandran', $$
{"name":"G. N. Ramachandran","field":"Biophysics","origin":"India","role":"Biophysicist","fact":"Developed the Ramachandran plot, a foundational tool for understanding the three-dimensional structure of proteins.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/G._N._Ramachandran.jpg","placeholder":"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85","source":"https://www.ias.ac.in/article/fulltext/reso/018/07/0587-0602","color":"sky"}
$$::jsonb, true),
('scientist', 'asima-chatterjee', $$
{"name":"Asima Chatterjee","field":"Chemistry","origin":"India","role":"Organic chemist","fact":"Pioneered research on plant-derived compounds and helped develop work on anti-malarial and anti-epileptic medicines.","image":"https://commons.wikimedia.org/wiki/Special:FilePath/Asima_Chatterjee.jpg","placeholder":"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85","source":"https://www.sciencehistory.org/historical-profile/asima-chatterjee","color":"coral"}
$$::jsonb, true)
on conflict (slug) do update set
  kind = excluded.kind,
  payload = excluded.payload,
  published = excluded.published,
  updated_at = now();

select slug, payload->>'name' as name
from public.content_items
where kind = 'scientist'
order by payload->>'name';
