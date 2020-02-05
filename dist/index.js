"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _TwitterTranslatorBot = require('./bots/TwitterTranslatorBot'); var _TwitterTranslatorBot2 = _interopRequireDefault(_TwitterTranslatorBot);
var _readlinesync = require('readline-sync'); var _readlinesync2 = _interopRequireDefault(_readlinesync);

function startupConfigs () {
  const user_screen_name = _readlinesync2.default.question('Who you want to watch? @')

  const configs = {
    user_screen_name,
    user_id: _readlinesync2.default.question(`What is the @${user_screen_name} ID (Optional) ? `, { defaultInput: '' }), // Carlsen id: 30352096
    status_count: 1,
    translate_to: _readlinesync2.default.question('Translate to: ', { defaultInput: 'en' }),
    include_rts: _readlinesync2.default.keyInYNStrict(`Include ${user_screen_name} retweets? `),
    watch: _readlinesync2.default.keyInYNStrict(`Watch for new ${user_screen_name} tweets and automatically reply? `),
    interval: 0
  }

  if (configs.watch) {
    const interval = _readlinesync2.default.questionInt('Interval time (seconds): ', { defaultInput: '60' })
    configs.interval = interval * 1000
  }

  return configs
}

const configs = startupConfigs()
new (0, _TwitterTranslatorBot2.default)(configs).init()
