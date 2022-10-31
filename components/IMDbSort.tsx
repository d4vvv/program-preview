import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IMDbSortTypes } from '../types/IMDbSortTypes'

import { Program } from '../types/Program'

interface IMDbSortProps {
  onSortChange(programs: Program[]): void
  programs: Program[]
}

export const IMDbSort: React.FC<IMDbSortProps> = ({
  onSortChange,
  programs,
}) => {
  const [currentSorting, setCurrentSorting] = useState(IMDbSortTypes.NONE)
  useEffect(() => setCurrentSorting(IMDbSortTypes.NONE), [programs])

  const sortAscending = () =>
    onSortChange(
      [...programs].sort(
        (current, next) =>
          parseFloat(current.imdb?.rating ?? '0') -
          parseFloat(next.imdb?.rating ?? '0')
      )
    )

  const sortDescending = () =>
    onSortChange(
      [...programs].sort((current, next) =>
        parseFloat(current.imdb?.rating ?? '0') >
        parseFloat(next.imdb?.rating ?? '0')
          ? -1
          : 1
      )
    )

  const onSortButtonClick = () => {
    if (currentSorting === IMDbSortTypes.NONE) {
      setCurrentSorting(IMDbSortTypes.DESC)
      sortDescending()
      return
    }
    if (currentSorting === IMDbSortTypes.DESC) {
      setCurrentSorting(IMDbSortTypes.ASC)
      sortAscending()
      return
    }
    setCurrentSorting(IMDbSortTypes.NONE)
    onSortChange([...programs])
  }

  const renderButtonIcon = () => {
    if (currentSorting === IMDbSortTypes.NONE) {
      return
    }
    if (currentSorting === IMDbSortTypes.DESC) {
      return <TriangleDownIcon />
    }
    return <TriangleUpIcon />
  }

  return (
    <Flex align="center" pb={[2, 0]}>
      <Button onClick={onSortButtonClick}>
        <Text pr={2}>Sort by IMDb</Text>
        {renderButtonIcon()}
      </Button>
    </Flex>
  )
}
