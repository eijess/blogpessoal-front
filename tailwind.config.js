/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", /*configurando como o meu tailwind vai trabalhar, mais detalhes em https://tailwindcss.com/docs/guides/vite*/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
