/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/bgImg.png')",
      },
      colors: {
        customGreen: '#486342', // Add your custom color here
        colorbg: '#335230',
        framecolor: '#486342',
        custombg: '#4863424D',
      },
      fontFamily: {
        Caveat: ['Caveat'],
        copperplate: ['Copperplate Gothic Bold'],
        lexend: ['Lexend Deca'],
      },
    },
  },
  plugins: [],
};
