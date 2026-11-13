# Zamokuhle Mazibuko — Portfolio

## Run locally

```sh
npm install
npm run dev
```

Create a `.env.local` file from `.env.example` and add the EmailJS values to enable the
contact form. Without these values, the form displays an error instead of reporting a false
success.

## Portfolio assets

- Add the CV at `public/cv/Zamokuhle-Mazibuko-CV.pdf`.
- Add project previews at `public/projects/aiviate-preview.jpg`,
  `public/projects/retail-bi-preview.jpg`, and
  `public/projects/freightshift-preview.jpg`. Use genuine project screenshots; 1600 × 1000
  JPEGs under 500 KB are recommended.
- Add certificate images in `public/certificates/` and set their paths in
  `src/data/certifications.js`. Credential links are optional.

Missing project previews display a text-only “Screenshot coming soon” fallback.

## EmailJS

Create an account at [emailjs.com](https://www.emailjs.com/), add an email service, then create
a template with `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}` addressed to
`zamosibusiso6@gmail.com`. Add the Service ID, Template ID, and Public Key to `.env.local` as
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.

## Deploy to Vercel

Run `npm i -g vercel && vercel`, or import the GitHub repository at
[vercel.com/new](https://vercel.com/new). Use the Vite preset, `npm run build` as the build
command, and `dist` as the output directory. Set all three `VITE_EMAILJS_*` variables in
Vercel project Settings → Environment Variables.
