create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('article', 'field_note', 'opportunity', 'correction', 'tinker_problem')),
  title text not null,
  summary text,
  source_url text not null,
  source_author text,
  published_at date,
  last_checked_at date,
  contributor_name text not null,
  status text not null default 'submitted' check (status in ('submitted', 'in_review', 'published', 'rejected')),
  created_at timestamptz not null default now()
);

create table public.published_content (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('story', 'opportunity', 'tinker')),
  payload jsonb not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.research_questions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  question text not null,
  research_status text not null,
  status_note text not null,
  source_name text not null,
  source_url text not null,
  next_step text,
  created_at timestamptz not null default now()
);

create table public.revisions (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.submissions(id) on delete cascade,
  action text not null,
  note text,
  actor_name text not null,
  created_at timestamptz not null default now()
);

alter table public.submissions enable row level security;
alter table public.published_content enable row level security;
alter table public.research_questions enable row level security;
alter table public.revisions enable row level security;

create policy "Anyone can read published submissions"
  on public.submissions for select
  using (status = 'published');

create policy "Anyone can read published content"
  on public.published_content for select
  using (published = true);

create policy "No public content writes"
  on public.published_content for insert
  with check (false);

create policy "No public content updates"
  on public.published_content for update
  using (false);

create policy "Anyone can submit for review"
  on public.submissions for insert
  with check (status = 'submitted');

create policy "Anyone can read research questions"
  on public.research_questions for select
  using (true);

create policy "No public revision writes"
  on public.revisions for insert
  with check (false);

-- Reviewer and moderator policies should be added only after authentication is configured.
-- Never put a service-role key in Vite, the browser, or contributor documentation.
