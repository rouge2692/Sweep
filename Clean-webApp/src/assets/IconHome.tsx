import { GiFamilyHouse } from "react-icons/gi";

interface Props {
  active: boolean;
}
function IconHome({ active }: Props) {
  return (
    <GiFamilyHouse
      className={`text-9xl ${
        active
          ? "transition-color duration-500 text-teal-600"
          : "text-slate-300 "
      } m-2`}
    />
  );
}

export default IconHome;
