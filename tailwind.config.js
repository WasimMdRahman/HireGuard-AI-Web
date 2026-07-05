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
          bgPrimary: '#111111',       // Background Primary
          bgSecondary: '#1a1a1a',     // Background Secondary
          bgCard: '#262626',          // Background Card
          accentPrimary: '#0ea5e9',   // Accent Primary (sky blue)
          accentLight: '#38bdf8',     // Accent Light
          accentHover: '#0284c7',     // Accent Hover
          highlight: '#f97316',       // Highlight (orange)
          textPrimary: '#ffffff',     // Text Primary (white)
          textSecondary: '#a3a3a3',   // Text Secondary (gray)
          textMuted: '#737373',       // Text Muted
          borderDefault: '#333333',   // Border Default
          borderStrong: '#404040',    // Border Strong
          success: '#22c55e',         // Success (green)
          error: '#ef4444',           // Error (red)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
