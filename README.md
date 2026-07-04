# Speak Up! English Course

A 15-day speaking and listening English course app for children aged 8–12, with a secure teacher dashboard, parent progress access, printable worksheets, flash cards, presentations, and PWA installation.

## Features

- 15 speaking-first lessons for A1–A2 learners
- Supabase teacher authentication and cloud student records
- Private parent progress access with strong family codes
- Printable worksheets, flash cards, and PowerPoint lessons
- Installable responsive PWA for phones, tablets, and laptops
- Anonymous website and installation analytics

## Setup

1. Clone the repository.
2. Create a Supabase project.
3. Run `supabase-setup.sql` in the Supabase SQL Editor.
4. Create the teacher account in Supabase Authentication.
5. Replace the public Supabase URL and publishable key in `script.js` when using another project.
6. Deploy with GitHub Pages.

The Supabase publishable key is designed for frontend use. Database security is enforced with authentication, Row Level Security, and restricted RPC functions. Never place a Supabase service-role key in frontend code.

## Local preview

Serve the repository with any static web server, then open `index.html`.

## Deployment

Push to `main`. The GitHub Pages workflow validates JavaScript and deploys the static site.
