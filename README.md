# Url Shortener 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Using React and Styled-Components. 

## Bitly API Installation

1. Create an account on https://app.bitly.com/
1. Create a **Generic Access Token** - profile settings > generic access token
1. Locate the **Group GUID** in your authenticated view - app.bitly.com/**Group GUUID**/bitlinks/
1. Make a .env.local file in the root of your project folder and copy and paste the below into it. Update the fields with your Access Token and Group GUID.

```BITLY_ACCESS_TOKEN=**Generic Access Token**
BITLY_GROUP_GUID=**Group GUID**
BITLY_URL=https://api-ssl.bitly.com/v4/shorten
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

