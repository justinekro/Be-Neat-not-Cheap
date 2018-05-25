// where the entry point is and where the output is
const path = require('path');
console.log(path.join(__dirname, 'public'))
module.exports = {
  entry: './src/app.js', // webpack.js.org
  output: {
    path: '', // where do we want to put it ? the path for the project on the machine
    filename:'bundle.js' // whatever we want
  }
};
