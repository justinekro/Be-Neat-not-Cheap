
// where the entry point is and where the output is

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: '.env.development' });

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js', // webpack.js.org
    output: {
      path: path.join(__dirname, 'public','dist'), // where do we want to put it ? the path for the project on the machine
      filename:'bundle.js' // whatever we want
    },
    module: {
      rules: [{
        loader: 'babel-loader', //  loader : tell webpack to convert every jsx in regular js.. with babel !
        test: /\.js$/, // check if the file getting loaded ends with js
        exclude: /node_modules/ // we don't want to run the files in the node modules form
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader:'css-loader',
              options: {
                sourceMap: true
              }
          }, {
              loader:'sass-loader',
              options: {
                sourceMap: true
              }
          }

          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)

      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // useful in case of error > it indicates where the error comes from not in bundle.js but in the proper js file. great for dev, not really for production
    devServer: { // allows not to regenerate bundle.js
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/' // tells the server that the routing will be done on the client side and that index.html should always be rendered
    }
  }
}
