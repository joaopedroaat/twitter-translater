"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Twitter = require('../services/Twitter'); var _Twitter2 = _interopRequireDefault(_Twitter);


class TwitterController {
   static getUserTimeline (id, screen_name, count, include_rts, exclude_replies = true) {
    return _Twitter2.default.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
      id,
      screen_name,
      count,
      include_rts,
      exclude_replies,
      tweet_mode: 'extended'
    })
  }

   static replyToStatus (id, text) {
    return _Twitter2.default.post('https://api.twitter.com/1.1/statuses/update.json', {
      status: text,
      in_reply_to_status_id: id,
      tweet_mode: 'extended'
    })
  }

  static generateURL (status) {
    const user_id = status.user.id
    const status_id = status.id

    return `https://twitter.com/${user_id}/status/${status_id}`
  }
}

exports. default = TwitterController
