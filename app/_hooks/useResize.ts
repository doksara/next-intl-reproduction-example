import debounce from "lodash/debounce"
import { useEffect } from "react"

/**
 *
 * @param onResize - Function that needs to be called on window resize event.
 * @param wait - The number of milliseconds to delay call of onResize function defined in first argument.
 * @param dependencies - Optional array of dependencies that, when changed from the previous render, will recall the
 *                       onResize function defined in the first argument. This recall will have no delay.
 */
export default function useResize(
  onResize: () => void,
  wait: number = 100,
  dependencies: React.DependencyList = []
) {
  useEffect(() => {
    onResize()
  }, dependencies)

  useEffect(() => {
    const handleResize = debounce(onResize, wait)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, dependencies)
}
