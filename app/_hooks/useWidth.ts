import { ElementRef, RefObject, useState } from "react"

import useResize from "./useResize"

/**
 *
 * @param ref - Reference for HTML element whose width should be determined.
 * @param options.modifier - Number of pixels that need to be added to div width
 * @param options.max - If div width is bigger than max, max is returned
 * @param wait - The number of milliseconds to delay calculation.
 * @param dependencies - Optional array of dependencies that, when changed from the previous render, will rerun the
 *                       calculation. This recall will have no delay.
 */
export default function useWidth<T extends Element = ElementRef<"div">>(
  ref: RefObject<T>,
  options?: { modifier?: number; max?: number },
  wait: number = 100,
  dependencies: React.DependencyList = []
) {
  const [width, setWidth] = useState<number>()

  const updateWidth = () => {
    let newWidth = ref?.current?.getBoundingClientRect().width || 0

    if (options?.modifier) {
      newWidth = newWidth + options?.modifier
    }

    if (options?.max) {
      newWidth = newWidth > options?.max ? options?.max : newWidth
    }

    if (newWidth > 0 && newWidth !== width) {
      setWidth(newWidth)
    }
  }

  useResize(updateWidth, wait, dependencies)

  return width
}
