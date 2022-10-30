import { Categories } from './Categories'
import { ProgramList } from './ProgramList'

export const ProgramPreview: React.FC = () => {
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
