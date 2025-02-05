function Inputs({ type, placeholder, value, handleOnchange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnchange(e.target.value)}
      />
    </div>
  );
}

export default Inputs;
