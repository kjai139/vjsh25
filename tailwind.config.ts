import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "lTheme": {
        extend: 'light',
        colors: {
          primary: {
            DEFAULT: 'hsl(346.8 77.2% 49.8%)',
            foreground: 'hsl(240 10% 3.9%)'
          },
          foreground: 'hsl(240 10% 3.9%);',
          background: 'hsl(0 0% 100%)',
          secondary: {
            DEFAULT:'hsl(240 4.8% 95.9%)',
            foreground: 'hsl(240 5.9% 10%)'
          },
          danger: {
            DEFAULT: 'hsl(0 84.2% 60.2%)',
            foreground: 'hsl(0 0% 98%)'
          },
          //card && popover
          content1: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(240 10% 3.9%)'
          },
          //muted && accent
          content2: {
            DEFAULT: 'hsl(240 4.8% 95.9%)',
            foreground: 'hsl(240 3.8% 46.1%)'
          },
          //border && input
          content3: {
            DEFAULT: 'hsl(240 5.9% 90%)'
          },
          content4: {
            DEFAULT: 'hsl(346.8 77.2% 49.8%)'
          }
          
        }
      },
      "dTheme": {
        extend: 'dark',
        colors: {
          default: {
            
          },
          primary: {
            DEFAULT: 'hsl(346.8 77.2% 49.8%)',
            foreground: 'hsl(355.7 100% 97.3%)'
          },
          foreground: 'hsl(0 0% 95%)',
          background: {
            DEFAULT: 'hsl(20 14.3% 4.1%)'
          },
          secondary: {
            DEFAULT:'hsl(240 3.7% 15.9%)',
            foreground: 'hsl(0 0% 98%)'
          },
          danger: {
            DEFAULT: 'hsl(0 62.8% 30.6%)',
            foreground: 'hsl(0 85.7% 97.3%)'
          },
          //card 
          content1: {
            DEFAULT: 'hsl(24 9.8% 10%)',
            foreground: 'hsl(0 0% 95%)',
            
          },
          //muted && accent 500
          content2: {
            DEFAULT: 'hsl(0 0% 15%)',
            foreground: 'hsl(240 5% 64.9%)',
            500: 'hsl(12 6.5% 15.1%)'
          },
          //border && input
          content3: {
            DEFAULT: 'hsl(240 5.9% 90%)'
          },
          //ring && border + input 500
          content4: {
            DEFAULT: 'hsl(346.8 77.2% 49.8%)',
            500: 'hsl(240 3.7% 15.9%)'
          },
          divider: {
            DEFAULT: 'hsl(12 6.5% 15.1%)'
          },
          focus: 'hsl(240 3.7% 15.9%)',
          //popover
          overlay: {
            DEFAULT: 'hsl(0 0% 9%)',
            foreground: 'hsl(0 0% 95%)'
          },
          
        }
      }
    }
  })],
};
export default config;


