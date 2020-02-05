import TwitterTranslatorBot from './bots/TwitterTranslatorBot'

new TwitterTranslatorBot({
  user_id: '',
  user_screen_name: 'TranslatedC',
  status_count: 1,
  translate_to: 'en',
  include_rts: false,
  watch: false
}).init()
