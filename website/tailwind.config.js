/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ tells Tailwind to scan all JSX/TSX files in /src
  ],
  theme: {
    extend: {}, // ✅ you can customize default theme here if needed
  },
  plugins: [], // ✅ optional Tailwind plugins (like forms, typography) can go here
}
