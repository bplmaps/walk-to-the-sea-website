module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      base: ['1rem', { lineHeight: '1.5rem' }], // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
      '4xl': ['2.25rem', { lineHeight: '1' }], // 36px
      '5xl': ['3rem', { lineHeight: '1' }], // 48px
      '6xl': ['4rem', { lineHeight: '1' }], // 64px
      '7xl': ['5rem', { lineHeight: '1' }], // 80px
      '8xl': ['6rem', { lineHeight: '1' }], // 96px
      '9xl': ['8rem', { lineHeight: '1' }] // 128px
    },
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'DM Serif Text',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ]
      },
      lineHeight: {
        condensed: '0.8'
      },
      colors: ({ colors }) => ({
        cobalt: '#1f4dfc',
        midnight: '#1d1e2c',
        pewter: '#ccd0d9',
        periwinkle: '#e0e6ff',
        cornflower: '#839cff'
      }),
      typography: ({ theme }) => ({
        midnight: {
          css: {
            '--tw-prose-body': theme('colors.midnight'),
            '--tw-prose-headings': theme('colors.midnight'),
            '--tw-prose-lead': theme('colors.midnight'),
            '--tw-prose-links': theme('colors.midnight'),
            '--tw-prose-bold': theme('colors.midnight'),
            '--tw-prose-counters': theme('colors.midnight'),
            '--tw-prose-bullets': theme('colors.midnight'),
            '--tw-prose-hr': theme('colors.midnight'),
            '--tw-prose-quotes': theme('colors.midnight'),
            '--tw-prose-quote-borders': theme('colors.midnight'),
            '--tw-prose-captions': theme('colors.midnight'),
            '--tw-prose-code': theme('colors.midnight'),
            '--tw-prose-pre-code': theme('colors.midnight'),
            '--tw-prose-pre-bg': theme('colors.midnight'),
            '--tw-prose-th-borders': theme('colors.midnight'),
            '--tw-prose-td-borders': theme('colors.midnight'),
            '--tw-prose-invert-body': theme('colors.midnight'),
            '--tw-prose-invert-headings': theme('colors.midnight'),
            '--tw-prose-invert-lead': theme('colors.midnight'),
            '--tw-prose-invert-links': theme('colors.midnight'),
            '--tw-prose-invert-bold': theme('colors.midnight'),
            '--tw-prose-invert-counters': theme('colors.midnight'),
            '--tw-prose-invert-bullets': theme('colors.midnight'),
            '--tw-prose-invert-hr': theme('colors.midnight'),
            '--tw-prose-invert-quotes': theme('colors.midnight'),
            '--tw-prose-invert-quote-borders': theme('colors.midnight'),
            '--tw-prose-invert-captions': theme('colors.midnight'),
            '--tw-prose-invert-code': theme('colors.midnight'),
            '--tw-prose-invert-pre-code': theme('colors.midnight'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.midnight'),
            '--tw-prose-invert-td-borders': theme('colors.midnight')
          }
        }
      }),
      spacing: {
        18: '4.5rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
