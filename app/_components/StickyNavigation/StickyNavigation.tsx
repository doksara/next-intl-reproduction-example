import { Text } from "@/components/Text"
import { IconChevronRightSmall } from "@/components/Icons"
import { Level } from "../DocumentRenderer"
import { FormattedMessage } from "../FormattedMessage"
import { Box } from "@/styled-system/jsx"
import { usePathname } from "@/i18n/routing"
import * as S from "./StickyNavigation.styles"

interface StickyNavigationProps {
  activeTitle: string | null
  sections: Level[]
}

export const StickyNavigation = ({
  activeTitle,
  sections,
}: StickyNavigationProps) => {
  const pathname = usePathname()

  return (
    <S.StickyNavigation>
      <S.StickyNavigationContainer>
        <S.StickyNavigationList>
          {sections.map((level1Sections) => (
            <S.StickyNavigationListItem
              key={level1Sections.id}
              color={activeTitle === level1Sections.id ? "blue" : undefined}
            >
              <S.StickyNavigationLink
                href={{ pathname: pathname, hash: level1Sections.id }}
              >
                <Box minW={["auto", "260px", "320px", "360px"]}>
                  <Text font="p2">
                    <FormattedMessage id={level1Sections.levelTitle} />
                  </Text>
                </Box>
                <IconChevronRightSmall
                  style={{ flexShrink: 0, transition: "stroke .3s linear" }}
                  stroke="currentColor"
                />
              </S.StickyNavigationLink>
            </S.StickyNavigationListItem>
          ))}
        </S.StickyNavigationList>
      </S.StickyNavigationContainer>
    </S.StickyNavigation>
  )
}
