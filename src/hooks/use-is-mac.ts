import React from 'react'

/**
 * Custom React hook to detect if the user's platform is macOS.
 *
 * @returns {boolean} Whether the user is on a Mac.
 */
export function useIsMac() {
  const [isMac, setIsMac] = React.useState(true)

  React.useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes('MAC'))
  }, [])

  return isMac
}
