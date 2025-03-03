import Input from "./Input"

const SearchFilter = ({ onSearchTermChange, searchTermValue}) => (
    <div>
      <Input label="Filter shown with  " name="filter" onChange={onSearchTermChange} value={searchTermValue} />
    </div>
  )

  export default SearchFilter