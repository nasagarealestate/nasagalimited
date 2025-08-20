export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'San Francisco', '-apple-system', 'HelveticaNeue', 'helvetica', 'roboto', 'droid serif', 'arial', 'sans-serif'],
      },
      colors: {
        'homelight': {
          'primary': '#1192e5',
          'secondary': '#46b6ff',
          'tertiary': '#0c6eba',
          'text': '#273653',
          'text-secondary': '#6b7280',
          'text-light': '#9ca3af',
        }
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'section': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'card-title': ['20px', { lineHeight: '28px', fontWeight: '700' }],
      }
    },
  },
  plugins: [],
}