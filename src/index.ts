import TwitterTranslatorBot, { TwitterTranslatorBotConfigs } from './bots/TwitterTranslatorBot'
import readline from 'readline-sync'

function startupConfigs (): TwitterTranslatorBotConfigs {
  const user_screen_name = readline.question('Who you want to watch? @')

  const configs: TwitterTranslatorBotConfigs = {
    user_screen_name,
    user_id: readline.question(`What is the ${user_screen_name} ID (Optional) ? `, { defaultInput: '' }), // Carlsen id: 30352096
    status_count: 1,
    translate_to: readline.question('Translate to: ', { defaultInput: 'en' }),
    include_rts: readline.keyInYNStrict(`Include @${user_screen_name} retweets? `),
    watch: readline.keyInYNStrict(`Watch for new ${user_screen_name} tweets and automatically reply? `),
    interval: 0
  }

  if (configs.watch) {
    const interval = readline.questionInt('Interval time (seconds): ', { defaultInput: '60' })
    configs.interval = interval * 1000
  }

  return configs
}

const configs = startupConfigs()
new TwitterTranslatorBot(configs).init()
