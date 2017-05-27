var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var youtube		= require('metalsmith-youtube');

Metalsmith(__dirname)
  .metadata({
    title: "Taishi & Yu Lu's Wedding",
    description: "Wedding demo site",
    generator: "Yu Lu",
    url: "http://littlecheesecake.me/"
  })
  .source('./src')
  .destination('./doc')
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
  .build(function(err, files) {
    if (err) { throw err; }
  });
