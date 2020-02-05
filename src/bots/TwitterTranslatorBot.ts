import TwitterController from '../controllers/TwitterController'
import translator from '../services/GoogleTranslator'
import { TweetObject } from '../services/Twitter'
import Status from '../models/Status'
import User from '../models/User'

export interface TwitterTranslatorBotConfigs {
  user_id: string,
  user_screen_name: string,
  status_count: number,
  translate_to: string,
  include_rts: boolean,
  watch: boolean,
  interval?: number
}

class TwitterTranslatorBot {
  private lastReplyedTweetId: string
  private configs: TwitterTranslatorBotConfigs

  public constructor (configs: TwitterTranslatorBotConfigs) {
    this.configs = configs
  }

  public init (): void {
    console.log('Getting Started...')

    const { user_id, user_screen_name, status_count, include_rts } = this.configs

    console.log('Looking for status...')
    TwitterController.getUserTimeline(user_id, user_screen_name, status_count, include_rts)
      .then(async (statuses: Array<TweetObject>) => {
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

          const translations = await translator(status.full_text, this.configs.translate_to)

          const translatedText = translations.data[0]

          const user = new User(status.user.id, status.user.name, status.user.screen_name)

          return new Status(
            status.created_at,
            status.id_str,
            translatedText,
            user
          )
        } catch (error) {
          console.log(error)
        }
      })
      .then((translated_status: null | Status) => {
        if (translated_status === null) return

        const replyText = `@${translated_status.user.screen_name}\n${translated_status.full_text}`
        console.log('Generating reply...')
        TwitterController.replyToStatus(translated_status.id_str, replyText)
          .then((reply: TweetObject) => {
            const user = new User(reply.user.id, reply.user.name, reply.user.screen_name)

            const generatedReply = new Status(
              reply.created_at,
              reply.id_str,
              reply.full_text,
              user
            )

            console.log(generatedReply)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}

export default TwitterTranslatorBot
