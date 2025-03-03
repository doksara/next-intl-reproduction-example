import { Text } from "@/components/Text"
import { HStack } from "@/styled-system/jsx"

interface StatisticsItemProps {
  icon: React.ReactNode
  itemName: React.ReactNode
  itemValue: React.ReactNode
}

export const StatisticsItem = ({
  icon,
  itemName,
  itemValue,
}: React.PropsWithChildren<StatisticsItemProps>) => {
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      py="8px"
      borderBottom="1px solid rgba(240, 238, 223, 0.6)"
      _last={{ borderBottom: "none" }}
    >
      <HStack gap="12px">
        {icon}
        <Text font="p1">{itemName}</Text>
      </HStack>
      <Text font="h3" fontWeight="bold">
        {itemValue}
      </Text>
    </HStack>
  )
}
