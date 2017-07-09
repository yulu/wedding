var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var youtube		= require('metalsmith-youtube');
var sass        = require('metalsmith-sass');

Metalsmith(__dirname)
  .metadata({
    title: "Taishi & Yu Lu's Wedding",
    description: "Wedding demo site",
    generator: "Yu Lu",
    url: "http://littlecheesecake.me/"
  })
  .source('./src')
  .destination('./docs')
  .clean(false)
  .use(youtube({
    width: 560,
	height: 315
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sass({
  	outputDir: 'css/'
  }))	
  .build(function(err, files) {
    if (err) { throw err; }
  });
