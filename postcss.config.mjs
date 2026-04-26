// Tailwind v4 plugs into PostCSS via @tailwindcss/postcss.
// fumadocs-ui v15 ships its CSS as Tailwind v4 directives (@theme, @source,
// @plugin), so this is required for the styles to actually apply.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
