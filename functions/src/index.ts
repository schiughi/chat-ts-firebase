import * as functions from "firebase-functions"
import * as Translate from "@google-cloud/translate"

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!")
})

const translator = new Translate({
  projectId: "awesome-chat-8e315",
})

interface TranslationData {
  text: string
  locale: string
  language: string
}

const translate: (data: any) => Promise<string> = async data => {
  const result: string[] = await translator.translate(data.text, data.language)
  return result[0]
}

export const reTranslate = functions.https.onCall(
  async (data: TranslationData, context: functions.https.CallableContext) => {
    const encoded = await translate(data)
    const decoded = await translate({
      text: encoded,
      language: data.locale,
    })
    return { text: decoded }
  }
)
