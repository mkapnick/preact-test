const express = require('express');
const sassify = require('node-sass-middleware');
const sessions = require('client-sessions');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const config = require('config');
const loginFilter = require('./filters/loginFilter.js');
const appendSubdomain = require('./middleware/subdomain.js');
const flash = require('connect-flash');
const csrfProtection = require('csurf')();
const proxy = require('./utils/proxyRoute.js');
const app = express();

const _directory = _path => path.join(__dirname, _path);

app.enable('trust proxy');
app.set('view engine', 'jade');

//starter middleware
app.use(favicon(_directory('../public/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//public assets
app.use('/public/css', sassify({
  src: _directory('../scss'),
  dest: _directory('../public-gen/css'),
  outputStyle: 'compressed'
}));
app.use('/public', express.static(_directory('../public')));
app.use('/public', express.static(_directory('../public-gen')));

//root
app.get('/', (req, res) => res.render('index'));
