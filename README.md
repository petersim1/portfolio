This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

I'm using `bun` runtime and package manager.

To install packages from `package.json`, use

`bun install`

To begin the development server, use

`bun --bun run dev`

### Vercel

I'm using dynamic opengraph images, based off the ImageResponse API. In order to test these at the edge run time, use

`vercel dev --listen $PORT`

which will allow you to test the dynamic opengraph images per route.

you can observe the OG preview here: https://www.opengraph.xyz/

## Layout

All blog posts are in `/posts`, which consist of `.mdx` files.

This repo is heavily dependent on `contentlayer` with some remark + rehype plugins to enable clean rendering of `.mdx` files and react components (including math), to valid html.

If you ever add a custom component to the `.mdx` files in `/posts`, be sure to add these components to the `components` const in `/app/(routes)/blog/[slug]/page.tsx` file. I could make this a provider, to consume the components in a layout file and make it accessible everywhere, but since `.mdx` is only rendered in the route I mentioned, I elect not to do this.
