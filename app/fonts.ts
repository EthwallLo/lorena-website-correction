import { Cutive, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const cutive = Cutive({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
