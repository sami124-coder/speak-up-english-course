# Supabase setup

1. Open https://supabase.com/dashboard/project/vibayhusnmcpvtlxuayh/sql/new
2. Open `supabase-setup.sql` from this project.
3. Copy the entire SQL file into the Supabase SQL Editor.
4. Click **Run** once.
5. Return to Codex and say **SQL complete**.

The migration creates the shared student table, teacher ownership policies, indexes, the restricted parent progress lookup function, and the parent-access publish function used by the teacher dashboard. Rerun the SQL after app updates when parent access changes. Never place a service-role key in this website.
