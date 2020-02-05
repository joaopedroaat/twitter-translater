"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _dotenv = require('dotenv'); var dotenv = _interopRequireWildcard(_dotenv);

dotenv.config()

 const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; exports.GOOGLE_API_KEY = GOOGLE_API_KEY
 const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY; exports.TWITTER_CONSUMER_KEY = TWITTER_CONSUMER_KEY
 const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET; exports.TWITTER_CONSUMER_SECRET = TWITTER_CONSUMER_SECRET
 const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN; exports.TWITTER_ACCESS_TOKEN = TWITTER_ACCESS_TOKEN
 const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET; exports.TWITTER_ACCESS_TOKEN_SECRET = TWITTER_ACCESS_TOKEN_SECRET
