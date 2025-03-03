import { styled } from "@/styled-system/jsx"

export const NoteText = styled("p", {
  base: {
    whiteSpace: "break-spaces",
    fontSize: { base: "20px", sm: "28px" },
    lineHeight: { base: 1.1, sm: 1.2 },
    letterSpacing: { base: "-0.6px", sm: "-0.84px" },
  },
})
