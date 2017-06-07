module.exports={

  entry: ['./app/index.js'],
  
  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },
  
 module: {
     loaders: [{
      loader: 'babel-loader',
      teast: /\.js$/,
      exclude: /node_modules/
     }
   ]
 },
  
 devServer: {
    port: 3000,
   contentBase: './build',
   inline: true
  }
}
