import { Dispatch, SetStateAction } from "react"

export type InputProps = {
  loading: boolean,
  setloading: Dispatch<SetStateAction<boolean>>,
  prompt: string,
  setprompt: Dispatch<SetStateAction<string>>
}

export type OutputProps = {
  loading: boolean,
  setloading: Dispatch<SetStateAction<boolean>>,
  prompt: string,
  setprompt: Dispatch<SetStateAction<string>>
}

export type AIFetchingProps = {
  response: string|null,
  setresponse: Dispatch<SetStateAction<string|null>>,
  prompt: string
}