import { PropsWithChildren, ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      {
        children
      }
    </>
  )
}
