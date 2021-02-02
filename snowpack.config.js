/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    entries: { url: '/' },
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
  ]
};