This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Contact form email configuration

The contact form sends submissions through the `/api/sendemail` route using SMTP.
Copy `.env.example` to `.env.local` for local development and configure:

- `SMTP_HOST`: SMTP server hostname (Gmail: `smtp.gmail.com`).
- `SMTP_PORT`: SMTP port (Gmail SSL: `465`).
- `SMTP_USER`: Gmail address used to send messages.
- `SMTP_PASS`: Gmail App Password (never use or commit your regular Gmail password).
- `CONTACT_TO_EMAIL`: inbox that receives portfolio enquiries.

Add the same variables under **Vercel → Project → Settings → Environment Variables** for
the Production and Preview environments, then redeploy. Keep real credentials out of
Git and never commit `.env.local`.

The contact form uses the visitor's email address as `Reply-To`, so you can reply
directly from the notification email.
