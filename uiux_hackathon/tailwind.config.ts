import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maingray: "#F2F0FF",
        secondary: "#FB2E86",
        violet: "#7E33E0",
        headingsText: "#1A0B5B",
        textStyle:"#151875"
        },
        container: {
          center: true,  
          screens: {
            sm: "100%", 
            md: "640px",
            lg: "371px",      
          },
        },
        spacing: {
          "no-margin": "0px",
          "default-margin": "371px", 
        },
    },
  },
  plugins: [],
} satisfies Config;
