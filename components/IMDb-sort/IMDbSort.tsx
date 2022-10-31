import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import { IMDbSortType } from '../../types/IMDbSortType'

interface IMDbSortProps {
  onSortChange(sort: IMDbSortType): void
  sort: IMDbSortType
  isDisabled: boolean
}

export const IMDbSort: React.FC<IMDbSortProps> = ({
  onSortChange,
  sort,
  isDisabled,
}) => {
  const onSortButtonClick = () => {
    switch (sort) {
      case IMDbSortType.NONE:
        onSortChange(IMDbSortType.DESC)
        return
      case IMDbSortType.DESC:
        onSortChange(IMDbSortType.ASC)
        return
      default:
        onSortChange(IMDbSortType.NONE)
        return
    }
  }

  const renderButtonIcon = () => {
    switch (sort) {
      case IMDbSortType.NONE:
        return
      case IMDbSortType.DESC:
        return <TriangleDownIcon />
      default:
        return <TriangleUpIcon />
    }
  }

  return (
    <Flex align="center" pb={[2, 0]}>
      <Button onClick={onSortButtonClick} isDisabled={isDisabled}>
        <Text pr={2}>Sort by IMDb</Text>
        {renderButtonIcon()}
      </Button>
    </Flex>
  )
}
