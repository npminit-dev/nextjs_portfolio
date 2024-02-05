import { PropsWithChildren, ReactNode } from "react";

export interface ContactType extends PropsWithChildren {
  title: string,
  description: string,
  url: string,
}