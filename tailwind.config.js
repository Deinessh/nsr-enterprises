/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0080C8',       // Logo Globe Blue
          blueDark: '#005F99',   // Deep Blue
          blueLight: '#38B6FF',  // Accent Light Blue
          blueSoft: '#EFF6FF',   // Light Blue Section Background
          blueCard: '#F0F7FF',   // Subtle Card Light Blue
          blueBorder: '#DBEAFE', // Soft Blue Border
          green: '#487B18',      // Logo Leaf Green
          greenDark: '#345C10',  // Deep Green
          greenAccent: '#5FA31E',// Vivid Leaf Green
          dark: '#0A1C27',       // Deep Dark Text & Primary Accents
          black: '#07141E',      // High Contrast Dark
          white: '#FFFFFF',      // Pure White Background
          offwhite: '#FFFFFF',   // White Dominant
          soft: '#F1F5F9',       // Slate Soft Neutral
          muted: '#475569',      // Slate Muted Text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 128, 200, 0.12)',
        'premium': '0 20px 40px rgba(0, 128, 200, 0.08)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'blue-glow': '0 0 25px rgba(0, 128, 200, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #EBF4FA 100%)',
        'light-blue-gradient': 'linear-gradient(135deg, #F0F7FF 0%, #E6F0FA 100%)',
        'blue-green-gradient': 'linear-gradient(135deg, #0080C8 0%, #487B18 100%)',
      }
    },
  },
  plugins: [],
}
