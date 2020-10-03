module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
        animation: {
          fadeOut: "fadeIn 2s ease-in forwards"
        },
        keyframes: {
          fadeOut: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 }
          }
        }
    },
  },
  variants: {
    animation: ["motion-safe"]
},
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],

}
