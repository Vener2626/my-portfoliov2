# Christian R. Veneracion — Portfolio

Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy

1. Add your resume PDF to `public/Christian_Veneracion_Resume.pdf`
   (the "Download CV" button in the Contact section links to `/Christian_Veneracion_Resume.pdf`).
2. Project images currently point to your existing GitHub Pages site
   (`vener2626.github.io/my-portfolio/image/...`). That's fine to keep,
   or copy those image files into `public/` and update the `img` paths
   in `app/components/Projects.tsx` to `/your-image.png` instead.
3. Update copy in `app/components/*.tsx` any time your experience changes.

## Deploy to Vercel (recommended)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave build settings as default (Next.js is auto-detected) → Deploy.
4. Optional: add a custom domain under Project → Settings → Domains.

Every future `git push` auto-deploys a new version.
