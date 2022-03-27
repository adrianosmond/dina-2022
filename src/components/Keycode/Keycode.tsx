import { ReactComponent as ChevronIcon } from 'assets/icons/chevron-up.svg';

type KeycodeProps = {
  value: number;
  onChange: (n: number) => void;
};

const Keycode = ({ value, onChange }: KeycodeProps) => {
  const increment = () => onChange((value + 1) % 10);
  const decrement = () => onChange((value + 9) % 10);

  return (
    <div className="flex flex-col font-mono">
      <button onClick={increment} className="flex justify-center">
        <ChevronIcon className="w-8 h-8" />
      </button>
      <div className="text-7xl">{value}</div>
      <button onClick={decrement} className="flex justify-center">
        <ChevronIcon className="w-8 h-8 transform rotate-180" />
      </button>
    </div>
  );
};
export default Keycode;
