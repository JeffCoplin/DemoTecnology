/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c5b5d',
        'primary-container': '#747376',
        secondary: '#005ab7',
        'secondary-container': '#0372e4',
        tertiary: '#854e00',
        'tertiary-container': '#a86300',
        background: '#faf8fe',
        surface: '#faf8fe',
        'surface-dim': '#dad9df',
        'surface-bright': '#faf8fe',
        'surface-container': '#eeedf3',
        'surface-container-low': '#f4f3f8',
        'surface-container-high': '#e9e7ed',
        'surface-container-highest': '#e3e2e7',
        'surface-container-lowest': '#ffffff',
        'inverse-surface': '#2f3034',
        'on-surface': '#1a1b1f',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        'on-background': '#1a1b1f',
        'on-surface-variant': '#414753',
        outline: '#717785',
        'outline-variant': '#c1c6d6',
        error: '#ba1a1a',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        ambient: '0px 24px 48px rgba(26, 27, 31, 0.06)',
        card: '0px 8px 24px rgba(26, 27, 31, 0.08)',
      },
    },
  },
  plugins: [],
}
