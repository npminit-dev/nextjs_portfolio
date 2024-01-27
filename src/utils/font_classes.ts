import { Nunito, Montserrat, Lato, Baskervville, Roboto, Raleway, Press_Start_2P } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin-ext"] });
export const montserrat = Montserrat({ subsets: ["latin-ext"] });
export const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700"],
});
export const baskervville = Baskervville({ weight: ['400'], subsets: ['latin-ext'] })
export const roboto = Roboto({weight: ['100', '300', '400', '500'], subsets: ['latin-ext']})
export const raleway = Raleway({ subsets: ['latin-ext']})
export const press_start = Press_Start_2P({ subsets: ['latin-ext'], weight: ["400"] })
