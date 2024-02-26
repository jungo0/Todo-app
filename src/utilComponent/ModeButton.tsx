import useDarkMode, { useDark } from '../hooks/useDarkMode';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
const ModeButton = () => {
  const [dark, setDark]: useDark = useDarkMode();

  return (
    <button
      className="btn bg-pointColor text-slate-50 dark:text-darkColor"
      onClick={() => setDark()}
    >
      {dark ? <FiSun className=" toggle" /> : <MdOutlineDarkMode className=" toggle" />}
    </button>
  );
};

export default ModeButton;
