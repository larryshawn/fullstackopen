import Input from "./Input"

const Form = ({ onSubmit, onNameChange, nameValue, onNumberChange, numberValue }) => (
  <form onSubmit={onSubmit}>
    <div>
      <Input label="name: " name="name" onChange={onNameChange} value={nameValue} />
    </div>
    <div>
    <Input label="number: " name="number" onChange={onNumberChange} value={numberValue} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default Form