import { Dispatch, SetStateAction } from "react"

export type InputProps = {
  loading: boolean,
  setloading: Dispatch<SetStateAction<boolean>>
}

export type OutputProps = {
  loading: boolean,
  setloading: Dispatch<SetStateAction<boolean>>,
  response: string|null,
  setresponse: Dispatch<SetStateAction<string|null>>
}