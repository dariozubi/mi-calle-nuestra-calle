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
      blue: '#4680c2',
      red: '#e63512',
      yellow: '#fdc100',
      green: '#02715b',
      ladrillo: '#cd6e58',
      pink: '#efa4bf',
      lila: '#ba8bbb',
      grey: '#f2f0eb',
      white: '#ffffff',
      black: '#000000',
      transparent: 'rgba(0,0,0,0)',
    },
  },
  plugins: [],
}
export default config
