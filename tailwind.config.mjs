/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                opacity: 0.8,
              },
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: 'rgb(var(--code-bg) / 0.1)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            '[data-code-title]': {
              backgroundColor: 'rgb(var(--code-bg) / 0.1)',
              borderBottom: '1px solid rgb(var(--code-bg) / 0.2)',
              padding: '0.5rem 1rem',
              marginBottom: 0,
            },
            '[data-code-title] + pre': {
              marginTop: 0,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

