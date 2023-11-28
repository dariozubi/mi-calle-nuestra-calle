import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      blue: '#5493cb',
      red: '#fc585c',
      yellow: '#ffcc26',
      green: '#00826f',
      ladrillo: '#db846c',
      pink: '#f4b8d2',
      salmon: '#f2d0c8',
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
}
export default config
