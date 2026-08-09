import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blackbox: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
          600: '#535353',
          500: '#666666',
          400: '#999999',
          300: '#cccccc',
          200: '#e6e6e6',
          100: '#f5f5f5',
          gold: '#d4af37',
          wine: '#722f37',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
}
export default config
