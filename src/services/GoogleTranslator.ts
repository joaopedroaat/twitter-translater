import GoogleTranslator from 'google-translate-open-api'

interface Translation {
  data: string[]
}

export default async (text: string, language: string): Promise<Translation> => {
  return GoogleTranslator(text, { to: language })
}
