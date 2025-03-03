import { styled } from "@/styled-system/jsx"
import { Link } from "@/i18n/routing"

export const StickyNavigation = styled("aside", {
  base: {
    position: { base: "static", sm: "sticky" },
    top: "96px",

    width: { base: "100%", sm: "auto" },
  },
})

export const StickyNavigationContainer = styled("nav", {
  base: {
    paddingLeft: "22px",
    borderLeft: "1px solid rgba(240, 238, 223, 0.30)",
  },
})

export const StickyNavigationList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: { base: "100%", sm: "324px", md: "384px" },
    width: "100%",
  },
})

export const StickyNavigationListItem = styled("li", {
  base: {
    _hover: {
      color: "blue",
    },
  },
})

export const StickyNavigationLink = styled(Link, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    transition: "color .15s linear",
    color: "inherit",
  },
})
