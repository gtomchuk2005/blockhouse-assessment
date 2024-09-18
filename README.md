## Tech Stack

Next.js, TypeScript, Chart.js, Django, Python

## Approach

- First, I created the backend and handled the serverside logic, mainly hardcoding the JSON for each HTTP route.
- Then, it was on to creating the frontend components and creating the dashboard where I handle the API calls from the Django backend.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
cd client/

# installing dependencies
npm install

# run server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open another terminal to run the Django server:

```bash
cd server/

# create virtual environment and install packages
python3 -m venv .venv
pip3 install -r requirements.txt

cd backend/
python3 manage.py runserver
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
