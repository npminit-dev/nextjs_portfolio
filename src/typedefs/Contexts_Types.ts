import OpenAI from "openai"
import { Thread } from "openai/resources/beta/index.mjs"
import { Dispatch, SetStateAction } from "react"

export type AIContextType = {
  response: string,
  setresponse: Dispatch<SetStateAction<string>>,
  client: OpenAI|undefined,
  setclient: Dispatch<SetStateAction<OpenAI|undefined>>,
  thread: Thread|undefined,
  setthread: Dispatch<SetStateAction<Thread|undefined>>,
  loading: boolean,
  setloading: Dispatch<SetStateAction<boolean>>
}