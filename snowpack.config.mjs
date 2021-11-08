export default {
  buildOptions: {
    out: './build'
  },
  devOptions: {
    open: 'false'
  },
  root: './src/',
  mount: {
    'src': '/',
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
};