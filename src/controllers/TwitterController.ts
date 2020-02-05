import twitter, { TweetObject } from '../services/Twitter'
import Twitter = require('twitter')

class TwitterController {
  public static getUserTimeline (id: string, screen_name: string, count: number, include_rts: boolean, exclude_replies = true): Promise<Twitter.ResponseData> {
    return twitter.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
      id,
      screen_name,
      count,
      include_rts,
      exclude_replies,
      tweet_mode: 'extended'
    })
  }

  public static replyToStatus (id: string, text: string): Promise<Twitter.ResponseData> {
    return twitter.post('https://api.twitter.com/1.1/statuses/update.json', {
      status: text,
      in_reply_to_status_id: id,
      tweet_mode: 'extended'
    })
  }

  static generateURL (status: TweetObject): string {
    const user_id = status.user.id
    const status_id = status.id

    return `https://twitter.com/${user_id}/status/${status_id}`
  }
}

export default TwitterController
