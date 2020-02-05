"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('../utils/dotenv');
var _twitter = require('twitter'); var _twitter2 = _interopRequireDefault(_twitter);














exports. default = new (0, _twitter2.default)({
  consumer_key: _dotenv.TWITTER_CONSUMER_KEY,
  consumer_secret: _dotenv.TWITTER_CONSUMER_SECRET,
  access_token_key: _dotenv.TWITTER_ACCESS_TOKEN,
  access_token_secret: _dotenv.TWITTER_ACCESS_TOKEN_SECRET
})
