/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {  backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
    
  animation: {
    shine: "shine 1s",
  },
  keyframes: {
    shine: {
      "100%": { left: "125%" },
    },
  },
  transitionTimingFunction: {
    'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
  }
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}