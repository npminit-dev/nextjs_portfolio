import { ReactNode } from "react";

export type ProjectProps = {
  name: string;
  info: string;
  cover: string;
  thumbnail: string;
  link?: string;
  tecs: Array<ReactNode|string|undefined>;
  repo?: string;
}