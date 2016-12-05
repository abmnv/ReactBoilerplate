var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

//load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <p>Boilerplate3</p>,
  document.getElementById('app')
);
