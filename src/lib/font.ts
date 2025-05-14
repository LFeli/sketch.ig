import { Geist, Geist_Mono } from 'next/font/google'

/**
 * Configures and imports the Manrope font from Google Fonts using Next.js.
 * @returns {Object} An object containing font settings, including:
 *  - `subsets` - Specifies the character subsets to include (e.g., 'latin').
 *  - `variable` - A CSS variable name for using the font in styles.
 */
export const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
