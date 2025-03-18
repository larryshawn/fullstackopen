import Input from "./Input"

const SearchFilter = ({ onSearchTermChange, searchTermValue}) => (
    <div>
      <Input label="Search for  " name="filter" onChange={onSearchTermChange} value={searchTermValue} />
    </div>
  )

  export default SearchFilter