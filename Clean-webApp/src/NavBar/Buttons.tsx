interface Props {
  children: string;
  onClick: () => void;
}

function Buttons({ children, onClick }: Props) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-32 duration-500 hover:bg-blue-600 hover:text-white bg-blue-300 text-black border-black rounded-full font-bold p-3"
    >
      {children}
    </button>
  );
}

export default Buttons;
