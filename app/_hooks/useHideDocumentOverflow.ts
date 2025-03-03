import { useCallback, useEffect, useMemo } from "react"

import useDeviceType, { DeviceType } from "./useDeviceType"
import { useMediaQuery } from "./useMediaQuery"

export const useHideDocumentOverflow = (hide?: boolean) => {
  const deviceType = useDeviceType()
  const isDesktop = useMediaQuery("(min-width: 992px)")

  const scrollbarWidth = useMemo(() => {
    if (typeof window === "undefined") {
      return 0
    }
    const scrollDiv = document.createElement("div")
    scrollDiv.style.overflow = "scroll"
    document.body.appendChild(scrollDiv)
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    return width
  }, [])

  const toggleDocumentOverflow = useCallback(
    (_hide?: boolean) => {
      if (_hide) {
        document.body.style.overflow = "hidden"
        if (isDesktop) {
          document.body.style.paddingRight = `${scrollbarWidth}px`
        }
        if (deviceType === DeviceType.IOS) {
          document.body.style.position = "relative"
          document.body.style.height = "100%"
          document.documentElement.style.overflow = "hidden"
          document.documentElement.style.position = "relative"
          document.documentElement.style.height = "100%"
        }
      } else {
        document.body.style.overflow = "visible"
        if (isDesktop) {
          document.body.style.paddingRight = ""
        }
        if (deviceType === DeviceType.IOS) {
          document.body.style.position = ""
          document.body.style.height = ""
          document.documentElement.style.overflow = ""
          document.documentElement.style.position = ""
          document.documentElement.style.height = ""
        }
      }
    },
    [deviceType]
  )

  useEffect(() => {
    toggleDocumentOverflow(hide)
    return () => toggleDocumentOverflow(false)
  }, [toggleDocumentOverflow, hide])
}
