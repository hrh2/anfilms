/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/views/auth/**/*.{js,jsx,ts,tsx}",
    "./src/views/user/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/services/auth/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@vidstack/react/tailwind.cjs')],
})