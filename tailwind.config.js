module.exports = {
  mode: 'jit',
  purge: {
    // enabled: false,
    content: ["./*.html"]
  },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'Arial', 'sans-serif']
      },
      // fontSize: {
      //   'xs': ['.75rem', '1'],
      //   'sm': '.875rem',
      //   'tiny': '.875rem',
      //   'base': '1rem',
      //   'lg': '1.125rem',
      //   'xl': '1.25rem',
      //   '2xl': '1.5rem',
      //   '3xl': '1.875rem',
      //   '4xl': '2.25rem',
      //   '5xl': ['3rem', '1'],
      //   '6xl': '4rem',
      //   '7xl': '5rem',
      // },
      colors: {
        primary: {
          light: "#00bbff",
          DEFAULT: "#0099ff",
          dark: "#0077ff"
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
