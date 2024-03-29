"use client"

import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <section>{ children }</section>
  )
}
