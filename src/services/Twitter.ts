import { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET } from '../utils/dotenv'
import Twitter from 'twitter'

export interface TwitterUser {
  id: number,
  name: string,
  screen_name: string
}

export interface TweetObject {
  created_at: string
  id_str: string
  full_text: string
  user: TwitterUser
}

export default new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
})
