module.exports = {
  // Entry Point
  // https://www.snowpack.dev/reference/configuration#mount
  mount: {
    src: '/',
  },

  // Plugins
  // https://www.snowpack.dev/reference/configuration#plugins
  plugins: [
    '@snowpack/plugin-sass',
    "@marlonmarcello/snowpack-plugin-pug",
    '@snowpack/plugin-postcss',
  ],

  // Dev Options
  // https://www.snowpack.dev/reference/configuration#devoptions
  devOptions: {
    port: 3000,
    open: 'none',
    // HRM fail if set below 300
    hmrDelay: 300,
  },

  // Build Options
  // https://www.snowpack.dev/reference/configuration#buildoptions
  buildOptions: {
    baseUrl: '/',
    out: 'dist',
  },
}
