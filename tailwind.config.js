/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C',
        panel: '#121315',
        line: '#23252A',
        text: '#EDEDEF',
        muted: '#8B9099',
        signal: '#F5A524',
        probe: '#5BC8FF',
      },
      fontFamily: {
        display: ['Kanit', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
