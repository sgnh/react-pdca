module.exports = {
  output: {
    library: 'pdca',
    libraryTarget: 'umd',
  },

  externals: {
    react: 'React',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
