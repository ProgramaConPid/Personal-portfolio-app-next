// Import Google fonts using Next.js font optimization
import { Roboto, Montserrat } from "next/font/google";

/**
 * Configure the Roboto font for use in the app
 * Only includes the 'latin' subset for performance
 */
export const roboto = Roboto({
  subsets: ["latin"],
});

/**
 * Configure the Montserrat font for use in the app
 * Only includes the 'latin' subset for performance
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
});
