/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2B916C',
        'brand-secondary': '#7062D0',
        'brand-accent1': '#D74278',
        'brand-accent2': '#EACD40',
        'brand-primary-tint': '#CBEFE2',
        'brand-secondary-tint': '#DBD8F3',
        'brand-accent1-tint': '#F8E0E9',
        'brand-accent2-tint': '#FBF6DA',
        'system-black': '#323232',
        'system-white': '#F3F4F6'
      },
      textColor: {
        'brand-primary': '#2B916C',
        'brand-secondary': '#7062D0',
        'brand-accent1': '#D74278',
        'brand-accent2': '#EACD40',
        'brand-primary-tint': '#CBEFE2',
        'brand-secondary-tint': '#DBD8F3',
        'brand-accent1-tint': '#F8E0E9',
        'brand-accent2-tint': '#FBF6DA',
        'system-black': '#323232',
        'system-white': '#F3F4F6'
      }
    },
    screens: {
      'mobile': '0px',
      'desktop': '961px'
    }
  },
  plugins: [],
}
