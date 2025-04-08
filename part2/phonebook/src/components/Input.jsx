const Input = ({ label, name, onChange, value}) => (
  <div>
    {label}<input name={name} onChange={onChange} value={value} />
  </div>
)

export default Input