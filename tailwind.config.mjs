/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sober pastel green-sage palette
        primary: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d4c7',
          300: '#a3b8a3',
          400: '#7d9a7d',
          500: '#5f7f5f',
          600: '#4a654a',
          700: '#3d523d',
          800: '#344434',
          900: '#2c392c',
          950: '#1a211a',
        },
        accent: {
          50: '#f0f9f4',
          100: '#daf0e3',
          200: '#b8e1cb',
          300: '#8ccbad',
          400: '#5fb08c',
          500: '#3f9572',
          600: '#2d765b',
          700: '#255f4a',
          800: '#1f4c3d',
          900: '#1a3f33',
          950: '#0f251e',
        },
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc.700'),
            '--tw-prose-headings': theme('colors.zinc.700'),
            '--tw-prose-links': theme('colors.primary.600'),
            '--tw-prose-bold': theme('colors.zinc.700'),
            '--tw-prose-code': theme('colors.primary.600'),
            '--tw-prose-quotes': theme('colors.zinc.900'),
            '--tw-prose-invert-body': theme('colors.zinc.300'),
            '--tw-prose-invert-headings': theme('colors.zinc.200'),
            '--tw-prose-invert-links': theme('colors.primary.400'),
            '--tw-prose-invert-bold': theme('colors.zinc.200'),
            '--tw-prose-invert-code': theme('colors.primary.400'),
            '--tw-prose-invert-quotes': theme('colors.zinc.100'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

