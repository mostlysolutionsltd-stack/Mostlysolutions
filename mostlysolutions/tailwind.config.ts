import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#081A36',
        'navy-dark': '#051224',
        'navy-mid': '#0B1F3A',
        blue: {
          DEFAULT: '#1D7FF2',
          light: '#4DA4FF',
          dark: '#0D4DA5',
        },
        lime: {
          DEFAULT: '#A8FF3D',
          dark: '#8BE02E',
          darker: '#62D84E',
        },
        gray: {
          50: '#F7F9FC',
          100: '#EEF3F8',
          200: '#DDE5EF',
          500: '#64748B',
          700: '#334155',
          900: '#0F172A',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #1D7FF2 0%, #0D4DA5 100%)',
        'accent-gradient': 'linear-gradient(135deg, #A8FF3D 0%, #62D84E 100%)',
        'hero-overlay':
          'linear-gradient(90deg, rgba(4,15,35,0) 0%, rgba(4,15,35,0) 100%)',
        'dark-gradient': 'linear-gradient(135deg, #051224 0%, #0B1F3A 100%)',
      },
      borderRadius: {
        card: '20px',
        button: '999px',
        input: '14px',
        modal: '24px',
      },
      boxShadow: {
        soft: '0 8px 25px rgba(0,0,0,.08)',
        medium: '0 15px 40px rgba(0,0,0,.12)',
        premium: '0 30px 80px rgba(0,0,0,.18)',
        card: '0 20px 50px rgba(0,0,0,.15)',
        header: '0 10px 30px rgba(0,0,0,.08)',
      },
      maxWidth: {
        content: '1280px',
        site: '1440px',
      },
      spacing: {
        'section-desktop': '120px',
        'section-tablet': '80px',
        'section-mobile': '60px',
        'header': '88px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
