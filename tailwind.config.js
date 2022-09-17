/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#37B888',
        'brand-secondary': '#7062D0',
        'brand-accent1': '#E481A6',
        'brand-accent2': '#EFDA6C',
        'brand-primary-tint': '#CBEFE2',
        'brand-secondary-tint': '#DBD8F3',
        'brand-accent1-tint': '#F8E0E9',
        'brand-accent2-tint': '#FBF6DA',
        'system-black': '#323232',
        'system-white': '#F3F4F6'
      },
      // backgroundColor: {
      //   'bg-brand-primary': '#37B888',
      //   'bg-brand-secondary': '#7062D0',
      //   'bg-brand-accent1': '#E481A6',
      //   'bg-brand-accent2': '#EFDA6C',
      //   'bg-brand-primary-tint': '#CBEFE2',
      //   'bg-brand-secondary-tint': '#DBD8F3',
      //   'bg-brand-accent1-tint': '#F8E0E9',
      //   'bg-brand-accent2-tint': '#FBF6DA',
      //   'bg-system-black': '#323232',
      //   'bg-system-white': '#F3F4F6'
      // }
      textColor: {
        'brand-primary': '#37B888',
        'brand-secondary': '#7062D0',
        'brand-accent1': '#E481A6',
        'brand-accent2': '#EFDA6C',
        'brand-primary-tint': '#CBEFE2',
        'brand-secondary-tint': '#DBD8F3',
        'brand-accent1-tint': '#F8E0E9',
        'brand-accent2-tint': '#FBF6DA',
        'system-black': '#323232',
        'system-white': '#F3F4F6'
      }
    },
  },
  plugins: [],
}
