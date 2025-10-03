# Contact Form - Vercel Deployment

A simple, secure contact form built with Next.js that can be deployed on Vercel.

## Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Form validation on both client and server side
- ✅ Secure email sending with Nodemailer
- ✅ Serverless deployment ready for Vercel
- ✅ TypeScript support
- ✅ Beautiful UI with success/error states

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `env.example` to `.env.local` and fill in your email configuration:

```bash
cp env.example .env.local
```

**Required Environment Variables:**

- `SMTP_HOST` - Your SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP port (usually 587 for TLS)
- `SMTP_SECURE` - Set to 'true' for port 465, 'false' for port 587
- `SMTP_USER` - Your email address
- `SMTP_PASS` - Your email password or app password
- `SMTP_FROM` - From email address (usually same as SMTP_USER)
- `CONTACT_EMAIL` - Email address where form submissions will be sent

### 3. Gmail Setup (Recommended)

For Gmail, you'll need to:

1. Enable 2-factor authentication
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `SMTP_PASS`

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your contact form.

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Environment Variables for Vercel

In your Vercel dashboard, add these environment variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Security Features

- Input validation and sanitization
- CSRF protection through Next.js
- Rate limiting (can be added with Vercel Edge Config)
- Secure SMTP configuration

## Customization

- Edit `app/page.tsx` to modify the form fields or styling
- Update `app/api/contact/route.ts` to change email formatting
- Modify the Tailwind classes for different styling

## Support

This is a standalone contact form that works out of the box with Vercel's serverless functions.
