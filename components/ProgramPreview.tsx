import { usePrograms } from '../hooks/usePrograms'
import { Categories } from './Categories'
import { ProgramList } from './ProgramList'

export const ProgramPreview: React.FC = () => {
  const { data } = usePrograms({ query: 'series', page: 2 })
  console.log({ data })
  return (
    <div>
      <p>Program Preview</p>
      <div className="flex flex-col lg:flex-row">
        <Categories />
        <ProgramList />
      </div>
    </div>
  )
}
