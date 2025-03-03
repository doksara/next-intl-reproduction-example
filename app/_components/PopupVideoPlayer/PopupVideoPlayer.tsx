import { Portal } from "../Portal"
import { Box } from "@/styled-system/jsx"
import * as S from "./styles"
import { IconClose } from "../Icons"
import { useHideDocumentOverflow } from "@/hooks/useHideDocumentOverflow"

interface PopupVideoPlayerProps {
  isOpen: boolean
  videoSrc: string
  onOutsideClick: () => void
}

export const PopupVideoPlayer = ({
  isOpen,
  onOutsideClick,
  videoSrc,
}: PopupVideoPlayerProps) => {
  useHideDocumentOverflow(isOpen)

  return (
    <Portal>
      {isOpen && (
        <Box
          style={{
            position: "fixed",
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            inset: 0,
            overflow: "hidden",
            zIndex: 1001,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          onClick={onOutsideClick}
        >
          <Box
            position="relative"
            maxW={["100%", "100%", "1440px"]}
            w="100%"
            bg="grey"
          >
            <Box
              position="absolute"
              top="-32px"
              right="0px"
              mb="8px"
              cursor="pointer"
              color="stone"
              zIndex={1001}
            >
              <IconClose height={24} width={24} strokeWidth={1.5} />
            </Box>

            <S.CustomVideo
              title="Sofascore Editor | Finest software in the game"
              src={videoSrc}
              allow="autoplay"
            />
          </Box>
        </Box>
      )}
    </Portal>
  )
}
