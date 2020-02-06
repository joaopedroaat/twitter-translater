"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _TwitterController = require('../controllers/TwitterController'); var _TwitterController2 = _interopRequireDefault(_TwitterController);
var _GoogleTranslator = require('../services/GoogleTranslator'); var _GoogleTranslator2 = _interopRequireDefault(_GoogleTranslator);

var _Status = require('../models/Status'); var _Status2 = _interopRequireDefault(_Status);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);











class TwitterTranslatorBot {
  
  

   constructor (configs) {
    this.configs = configs
  }

   init () {
    if (this.configs.watch) {
      console.log(`Searching Tweets every ${this.configs.interval / 1000} seconds.`)
      this.fetchTranslateAndReply()
      setInterval(() => {
        this.fetchTranslateAndReply()
      }, this.configs.interval)
    } else {
      this.fetchTranslateAndReply()
    }
  }

   fetchTranslateAndReply () {
    console.log('Getting Started...')

    const { user_id, user_screen_name, status_count, include_rts } = this.configs

    console.log('Looking for status...')
    _TwitterController2.default.getUserTimeline(user_id, user_screen_name, status_count, include_rts)
      .then(async (statuses) => {
        if (statuses.length === 0) {
          console.log("Couldn't find any status.")

          return null
        }

        const status = statuses[0]

        if (status.id_str === this.lastReplyedTweetId) {
          console.log('No new status available.')

          return null
        }

        this.lastReplyedTweetId = status.id_str

        try {
          console.log('Translating...')

          const translations = await _GoogleTranslator2.default.call(void 0, status.full_text, this.configs.translate_to)

          const translatedText = translations.data[0]

          const user = new (0, _User2.default)(status.user.id, status.user.name, status.user.screen_name)

          return new (0, _Status2.default)(
            new Date(status.created_at),
            status.id_str,
            translatedText,
            user
          )
        } catch (error) {
          console.log(error)
        }
      })
      .then((translated_status) => {
        if (translated_status === null) return

        const replyText = `@${translated_status.user.screen_name}\n${translated_status.full_text}`
        console.log('Generating reply...')
        _TwitterController2.default.replyToStatus(translated_status.id_str, replyText)
          .then((reply) => {
            const user = new (0, _User2.default)(reply.user.id, reply.user.name, reply.user.screen_name)

            const generatedReply = new (0, _Status2.default)(
              new Date(reply.created_at),
              reply.id_str,
              reply.full_text,
              user
            )

            console.log(generatedReply)
          })
          .catch(error => {
            const { code } = error[0]

            if (code === 187) {
              console.log('The status had already been replied.')
            } else {
              console.log(error)
            }
          })
      })
      .catch(error => console.log(error))
  }
}

exports. default = TwitterTranslatorBot
