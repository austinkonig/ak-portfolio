# Austin Konig Portfolio - Setup Guide

## Prerequisites

- Node.js 20.x or later
- Git

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/austinkonig/ak-portfolio.git
   cd ak-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Update the portfolio data**

   Update the portfolio data in the `app/data.ts` file to reflect your own information.

   ```ts
   export const EMAIL = 'your@email.com'

   export const SOCIAL_LINKS = [
     {
       label: 'Github',
       link: 'your-github-url',
     },
     // Add your social links
   ]

   ...
   ```

5. **Add your blog posts**

Create a new .mdx file for each blog post inside the app/blog folder. For example:
app/blog/your-article-slug/page.mdx.

Example blog post structure in .mdx:

```mdx
# Your Article Title

Introduction

Your content here...

## Code Examples

// Example code block here...
```

**Note:** You can use all MDX features, including React components, in your blog posts.

6. **Project Structure**

For a better understanding of the Next.js project structure, refer to the [Next.js](https://nextjs.org/docs/app/getting-started/project-structure) documentation.

7. **Additional Features**

This portfolio includes:
- Interactive pixelated overlay effects
- Custom typography with PPMondwest and PPNeueBit fonts
- Animated components from [Motion-Primitives](https://motion-primitives.com/)

8. **Deployment**

You can deploy your site to any hosting platform that supports Next.js. For the easiest deployment experience, consider using Vercel or Netlify.
