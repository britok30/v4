# v4

This is my fourth iteration of my website. I wanted to leverage Next.js and server side rendering for the Unsplash API. I updated it to use Next.js, React, Tailwind for styling, and TypeScript for type saefty. Below are the instructions to set it up locally. Hope you enjoy!

<img width="1432" alt="Screen Shot 2022-06-17 at 2 11 27 AM" src="https://user-images.githubusercontent.com/52144063/174236364-eee6fe7b-95e8-4f8e-a64b-f7b46a189a80.png">

## Tech stack

- **Styling:** [Tailwind](https://tailwindcss.com/)
- **Back-end:** [Next.js](https://nextjs.org/)
- **Front-end:** [React](https://reactjs.org/) [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Vercel](https://vercel.com/)

## Performance

For this version I wanted to improve performance, SEO and have an added focus on accessibility. I leveraged Next.js' server-side rendering to help out when using the Unsplash API. I added aria-labels where needed to improve accessibility. I made sure to add the correct meta tags for SEO improvements. V3 typically had a performance score of 83-87. The biggest reason why was how I was manually handling the image rendering for the hero component on the client-side. But I'm very pleased with the results. 

![Screen Shot 2022-06-17 at 12 44 22 PM](https://user-images.githubusercontent.com/52144063/174341395-3e307d3a-c321-4e2d-ac64-7f4eee5a39fe.png)

## Running locally

1. Clone this repo:

```sh
$ git clone git@github.com:britok30/v4.git
```

2. Then go to the project's folder:

```sh
cd v4
```

3. Install all dependencies:

```sh
yarn
```

4. Run locally:

```sh
yarn dev
```

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
