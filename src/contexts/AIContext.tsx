import { AIContextType } from "@/typedefs/Contexts_Types";
import OpenAI from "openai";
import { Thread } from "openai/resources/beta/index.mjs";
import { PropsWithChildren, createContext, useEffect, useState } from "react"

const defValues: AIContextType = {
  client: undefined,
  setclient: () => null,
  response: '',
  setresponse: () => null,
  thread: {} as Thread,
  setthread: () => null,
  loading: true,
  setloading: () => null
}

export const aicontext = createContext<AIContextType>(defValues)

export function AIContextProvider({ children }: PropsWithChildren) {

  const [client, setclient] = useState<OpenAI|undefined>(new OpenAI({
    organization: process.env.NEXT_PUBLIC_organization,
    apiKey: process.env.NEXT_PUBLIC_GPTBot_key,
    dangerouslyAllowBrowser: true
  }));
  const [thread, setthread] = useState<Thread>();
  const [response, setresponse] = useState<string>('')
  const [loading, setloading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      try {
        if(client) {
          setloading(true);
          setresponse('Connecting AI, creating thread')
          const newthread = await client.beta.threads.create()
          setthread(newthread)
          setresponse('Connection successfull, ready to respond')
          setloading(false)
        } else {
          setresponse('error: cannot create OpenAI client')
        }
      } catch(err) {
        setresponse('error: cannot create a conversation thread')
      }
    })();
  }, [])


  return (
    <aicontext.Provider
      value={{ client, setclient, thread, setthread, response, setresponse, loading, setloading }}
    >
      {children}
    </aicontext.Provider>
  )
}