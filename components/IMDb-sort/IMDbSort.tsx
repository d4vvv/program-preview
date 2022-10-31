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
    if (sort === IMDbSortType.NONE) {
      onSortChange(IMDbSortType.DESC)
      return
    }
    if (sort === IMDbSortType.DESC) {
      onSortChange(IMDbSortType.ASC)
      return
    }
    onSortChange(IMDbSortType.NONE)
  }

  const renderButtonIcon = () => {
    if (sort === IMDbSortType.NONE) {
      return
    }
    if (sort === IMDbSortType.DESC) {
      return <TriangleDownIcon />
    }
    return <TriangleUpIcon />
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
