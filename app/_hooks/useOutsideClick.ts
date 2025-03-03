import { RefObject, useEffect, useRef } from "react"

/**
 * @param {HTMLElement} parent the parent node
 * @param {EventTarget} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */
function isOrContainsNode(
  parent: HTMLElement | null,
  child: EventTarget | null
): boolean | undefined {
  if (parent && child) {
    const result =
      parent === child ||
      (child instanceof Node && parent.contains && parent.contains(child))
    return result
  }

  return undefined
}

/**
 * Handle click outside referenced component
 */
export default function useOutsideClick<T extends HTMLElement = HTMLElement>(
  outsideClickCallback?: (event: MouseEvent | TouchEvent) => void,
  deps: React.DependencyList = []
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const isInsideClick = isOrContainsNode(ref.current, event.target)

      if (typeof isInsideClick === "boolean" && !isInsideClick) {
        outsideClickCallback?.(event)
      }
    }

    // use capture to circumvent handlers with `Event.stopPropagation()` defined
    document.addEventListener("click", handleClickOutside, {
      passive: true,
      capture: true,
    })
    document.addEventListener("touchmove", handleClickOutside, {
      passive: true,
      capture: true,
    })

    return () => {
      // note that an event listener defined with `capture` must also have `capture` defined
      // when matching for its removal, but the same is not true for `passive`;
      // read more:
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      })
      document.removeEventListener("touchmove", handleClickOutside, {
        capture: true,
      })
    }
  }, [outsideClickCallback, ...deps])

  return ref
}
