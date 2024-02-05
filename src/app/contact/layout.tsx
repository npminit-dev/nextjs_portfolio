"use client"

import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[100vw] h-fit">
      {
        children
      }
    </div>
  )
}
