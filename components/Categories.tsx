export const Categories: React.FC = () => {
  return (
    <div className="basis-1/4">
      <div>
        <label htmlFor="series">Series</label>
        <input
          type="checkbox"
          id="series"
          className="appearance-none border-zinc-700 border rounded-sm h-4 w-4 checked:bg-orange-400"
        />
      </div>
      <div>
        <label htmlFor="series">Movie</label>
        <input
          type="checkbox"
          id="series"
          className="appearance-none border-zinc-700 border rounded-sm h-4 w-4 checked:bg-orange-400"
        />
      </div>
    </div>
  )
}
