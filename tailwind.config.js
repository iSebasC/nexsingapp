/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        hero: "rgb(var(--hero-bg))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#0E037F",
        "primary-light": "#6366F1",
        "brand-violet": "#8B5CF6",
        "brand-dark": "#050714",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
      },
      screens: {
        midmd: "880px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0E037F 0%, #6366F1 100%)",
        "hero-gradient": "linear-gradient(135deg, #050714 0%, #0a0520 50%, #050714 100%)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scroll-x": "scrollX 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "float": "floatUpDown 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
