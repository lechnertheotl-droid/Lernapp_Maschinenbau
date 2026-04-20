/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        paper: '#F5F5EF',
        ink: {
          DEFAULT: '#1a1a1a',
          light:   '#3a3a3a',
          soft:    '#555555',
        },
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#003DA5',
          800: '#1e3799',
          900: '#1e3a8a',
        },
        surface: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          150: '#e8eef5',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        lemon: {
          DEFAULT: '#FFD60A',
          dark:    '#E5BE00',
          light:   '#FFF9C4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        retro: '14px',
      },
      boxShadow: {
        'hard':       '3px 3px 0 0 #1a1a1a',
        'hard-sm':    '2px 2px 0 0 #1a1a1a',
        'hard-lg':    '5px 5px 0 0 #1a1a1a',
        'hard-xl':    '7px 7px 0 0 #1a1a1a',
        'hard-blue':  '3px 3px 0 0 #003DA5',
        'hard-lemon': '3px 3px 0 0 #E5BE00',
        'hard-green': '3px 3px 0 0 #166534',
        'hard-red':   '3px 3px 0 0 #991b1b',
      },
      animation: {
        'fade-in':     'fadeIn 0.18s ease-out',
        'slide-up':    'slideUp 0.28s ease-out',
        'pop':         'pop 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shake':       'shake 0.45s ease-in-out',
        'celebrate':   'celebrate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-up': 'slideInUp 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        'pulse-soft':  'pulseSoft 2s ease-in-out infinite',
        'stamp-in':    'stampIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'check-draw':  'checkDraw 0.5s ease-out 0.4s forwards',
        'sparkle-in':  'sparkleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%':   { transform: 'scale(0.88)', opacity: '0' },
          '70%':  { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        shake: {
          '0%,100%': { transform: 'translateX(0)' },
          '15%':     { transform: 'translateX(-7px)' },
          '35%':     { transform: 'translateX(7px)' },
          '55%':     { transform: 'translateX(-4px)' },
          '75%':     { transform: 'translateX(4px)' },
          '90%':     { transform: 'translateX(-2px)' },
        },
        celebrate: {
          '0%':   { transform: 'scale(1) rotate(0deg)' },
          '25%':  { transform: 'scale(1.12) rotate(-3deg)' },
          '50%':  { transform: 'scale(1.18) rotate(3deg)' },
          '75%':  { transform: 'scale(1.06) rotate(-1deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.6' },
        },
        stampIn: {
          '0%':   { opacity: '0', transform: 'scale(0) rotate(-15deg)' },
          '60%':  { opacity: '1', transform: 'scale(1.18) rotate(6deg)' },
          '80%':  { transform: 'scale(0.95) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        checkDraw: {
          from: { strokeDashoffset: '60' },
          to:   { strokeDashoffset: '0' },
        },
        sparkleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.4)' },
          '70%':  { opacity: '1', transform: 'scale(1.15)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
