import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (query: string) => {
  const isSupported = typeof window !== "undefined" && "matchMedia" in window
  const [isMatch, setIsMatch] = useState(false)

  const checkMatches = useCallback((event: MediaQueryListEvent) => {
    setIsMatch(event.matches)
  }, [])

  useEffect(() => {
    if (!isSupported) return undefined

    const mediaListener = window.matchMedia(query)

    mediaListener.addEventListener("change", checkMatches)

    setIsMatch(!!window.matchMedia(query).matches)

    return () => {
      mediaListener.removeEventListener("change", checkMatches)
    }
  }, [])

  return isMatch
}
