import * as React from 'react'

/**
 * Custom React hook to evaluate a CSS media query.
 *
 * @param {string} query - The media query string to evaluate.
 * @returns {boolean} Whether the media query currently matches.
 */
export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
