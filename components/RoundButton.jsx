const RoundButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn px-4 fw-bold round-button ${className}`}>
      {children}
    </button>
  );
};

RoundButton.defaultProps = {
  className: ''
}

export default RoundButton;
