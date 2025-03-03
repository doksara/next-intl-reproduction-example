import { useCallback } from "react"
import { IconScrollToTop } from "../Icons"
import * as S from "./BackToTopButton.styles"

export const BackToTopButton = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <S.StyledButton onClick={handleScrollToTop} aria-label="Scroll to top">
      <IconScrollToTop width={16} />
    </S.StyledButton>
  )
}
