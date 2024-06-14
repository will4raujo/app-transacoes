import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark_100: '#000405',
      dark_200: '#001119',
      dark_300: '#000A0F',
      light_100: '#FFFFFF',
      light_200: '#C4C4CC',
      tomato_100: '#750310'              
      }
  },
  plugins: [],
};
export default config;
