// where the entry point is and where the output is
const path = require('path');

module.exports = {
  entry: './src/app.js', // webpack.js.org
  output: {
    path: path.join(__dirname, 'public'), // where do we want to put it ? the path for the project on the machine
    filename:'bundle.js' // whatever we want
  },
  module: {
    rules: [{
      loader: 'babel-loader', //  loader : tell webpack to convert every jsx in regular js.. with babel !
      test: /\.js$/, // check if the file getting loaded ends with js
      exclude: /node_modules/ // we don't want to run the files in the node modules form
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ] //array of loaders
    }]
  },
  devtool: 'cheap-module-eval-source-map', // useful in case of error > it indicates where the error comes from not in bundle.js but in the proper js file. great for dev, not really for production
  devServer: { // allows not to regenerate bundle.js
    contentBase: path.join(__dirname, 'public')
  }
};
