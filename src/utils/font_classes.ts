import { Nunito, Montserrat, Lato } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin-ext"] });
export const montserrat = Montserrat({ subsets: ["latin-ext"] });
export const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700"],
});
