"use client"

import { Player } from "@lottiefiles/react-lottie-player"

interface AnimationPlayerProps {
  src: string
  style?: React.CSSProperties
}

export const AnimationPlayer = ({ src, style }: AnimationPlayerProps) => {
  return (
    <Player
      autoplay
      src={src}
      keepLastFrame
      loop
      renderer="svg"
      style={style}
    />
  )
}
