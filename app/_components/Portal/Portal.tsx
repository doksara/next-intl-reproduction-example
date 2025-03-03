import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  id?: string
}

export const Portal = ({
  id = "portals",
  children,
}: React.PropsWithChildren<PortalProps>) => {
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    ref.current = document.getElementById(id) as HTMLElement
  }, [id])

  return ref.current ? createPortal(children, ref.current) : null
}
