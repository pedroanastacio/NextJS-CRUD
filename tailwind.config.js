module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /text-(red|emerald|blue)-(500|600)/,
    },
    {
      pattern: /from-(fuchsia|emerald|blue|slate)-(400|500|600|700)/
    },
    {
      pattern: /to-(fuchsia|emerald|blue|slate)-(400|500|600|700)/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}