import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'light-gray': '#F2F0F1',
        'soft-gray': '#F0EEED',
        'neutral-gray': '#F0F0F0',
        'pure-black': '#000000',
        'golden-yellow': '#EBD96B',
      },
    },
  },
  plugins: [],
};
export default config;
