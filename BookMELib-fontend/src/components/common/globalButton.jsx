const GlobalButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 text-white bg-gray-950 capitalize rounded transition"
    >
      {text}
    </button>
  );
};

export default GlobalButton;
