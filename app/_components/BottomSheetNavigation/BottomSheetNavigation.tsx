"use client"

import useOutsideClick from "@/hooks/useOutsideClick"
import { Link, usePathname } from "@/i18n/routing"
import { Text } from "@/components/Text"
import { Fragment, Ref, useState } from "react"
import { IconChevronDown, IconChevronRightSmall } from "@/components/Icons"
import { Box, Divider } from "@/styled-system/jsx"
import { Level } from "../DocumentRenderer"
import { FormattedMessage } from "../FormattedMessage"
import * as S from "./BottomSheetNavigation.styles"

interface BottomSheetNavigationProps {
  activeTitle: string
  otherTitles: Level[]
}

export const BottomSheetNavigation = ({
  activeTitle,
  otherTitles,
}: BottomSheetNavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const toggle = () => setIsExpanded((prev) => !prev)
  const handleClickOutside = () => setIsExpanded(false)

  const ref: Ref<HTMLElement> = useOutsideClick(handleClickOutside)

  return (
    <S.BottomSheetNavigation ref={ref}>
      {isExpanded ? (
        <S.BottomSheetList>
          {otherTitles.map((item) => (
            <Fragment key={item.id}>
              <S.BottomSheetListItem>
                <Link
                  href={{ pathname: pathname, hash: item.id }}
                  onClick={() => setIsExpanded(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text font="p2">
                    <FormattedMessage id={item.levelTitle} />
                  </Text>
                  <IconChevronRightSmall
                    width={9}
                    height={15}
                    stroke="#121212"
                  />
                </Link>
              </S.BottomSheetListItem>

              <Box px="20px">
                <Divider orientation="horizontal" />
              </Box>
            </Fragment>
          ))}
        </S.BottomSheetList>
      ) : null}

      <S.BottomSheetActiveItem aria-expanded={isExpanded} onClick={toggle}>
        <Text font="p2">
          <FormattedMessage id={activeTitle} />
        </Text>

        <IconChevronDown
          transform={isExpanded ? "rotate(180)" : undefined}
          style={{ transition: "transform .05s ease-in-out" }}
        />
      </S.BottomSheetActiveItem>
    </S.BottomSheetNavigation>
  )
}
