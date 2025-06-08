import React from 'react'

interface HighlightedTextProps {
  text: string
  search: string
}

/**
 * Escapes special characters in a string to safely use it in a regular expression.
 *
 * @param {string} input - The input string to escape.
 * @returns {string} The escaped string.
 */
const escapeRegex = (input: string) =>
  input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

export function HighlightedText({ text, search }: HighlightedTextProps) {
  if (!search) {
    // biome-ignore lint/complexity/noUselessFragments: <explanation>
    return <React.Fragment>{text}</React.Fragment>
  }

  /**
   * Escapes the search term to safely use in a regular expression.
   * @type {string}
   */
  const escapedSearch = escapeRegex(search)

  /**
   * Regular expression to match the escaped search term, case-insensitive and global.
   * @type {RegExp}
   */
  const searchRegex = new RegExp(`(${escapedSearch})`, 'gi')

  /**
   * Text split into parts based on matches with the search regex.
   * Matching terms are preserved in the result.
   * @type {string[]}
   */
  const parts = text.split(searchRegex)

  return (
    <React.Fragment>
      {parts.map((part, index) =>
        searchRegex.test(part) ? (
          <mark key={index} className="bg-yellow-200 text-yellow-900">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </React.Fragment>
  )
}
