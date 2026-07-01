-- Run this once in Supabase Dashboard → SQL Editor.
create table if not exists public.students (
  id bigint primary key,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  family_code text not null,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists students_teacher_id_idx on public.students(teacher_id);
create index if not exists students_parent_lookup_idx on public.students(lower(name), upper(family_code));
alter table public.students enable row level security;

drop policy if exists "Teachers read own students" on public.students;
create policy "Teachers read own students" on public.students for select to authenticated
using ((select auth.uid()) = teacher_id);

drop policy if exists "Teachers insert own students" on public.students;
create policy "Teachers insert own students" on public.students for insert to authenticated
with check ((select auth.uid()) = teacher_id);

drop policy if exists "Teachers update own students" on public.students;
create policy "Teachers update own students" on public.students for update to authenticated
using ((select auth.uid()) = teacher_id) with check ((select auth.uid()) = teacher_id);

drop policy if exists "Teachers delete own students" on public.students;
create policy "Teachers delete own students" on public.students for delete to authenticated
using ((select auth.uid()) = teacher_id);

create or replace function public.get_child_progress(p_student_name text, p_family_code text)
returns jsonb language sql stable security definer set search_path = public
as $$
  select payload from public.students
  where lower(name) = lower(trim(p_student_name))
    and upper(family_code) = upper(trim(p_family_code))
  limit 1;
$$;

revoke all on function public.get_child_progress(text,text) from public;
grant execute on function public.get_child_progress(text,text) to anon, authenticated;
