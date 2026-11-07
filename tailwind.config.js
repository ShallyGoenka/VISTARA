/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F5F0',
          50: '#FCFBF9',
          100: '#F7F5F0',
          200: '#EBE7DE',
        },
        charcoal: {
          DEFAULT: '#242321',
          light: '#363431',
          muted: '#575551', // Charcoal ~70% opacity, >= 4.5:1 contrast on ivory
        },
        burgundy: {
          DEFAULT: '#783F46',
          hover: '#5F3037',
          dark: '#B76A74',
          'dark-hover': '#C57E88',
        },
        sand: {
          DEFAULT: '#D9D0C3',
          light: '#EBE5DC',
          dark: '#3A3834',
        },
        dark: {
          bg: '#1B1A18',
          card: '#242321',
          text: '#F7F5F0',
          muted: '#B0ADA8',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(36, 35, 33, 0.04), 0 1px 2px -1px rgba(36, 35, 33, 0.04)',
        'soft-md': '0 4px 6px -1px rgba(36, 35, 33, 0.06), 0 2px 4px -2px rgba(36, 35, 33, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(36, 35, 33, 0.08), 0 4px 6px -4px rgba(36, 35, 33, 0.08)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      letterSpacing: {
        'meta': '0.2em',
      }
    },
  },
  plugins: [],
};

