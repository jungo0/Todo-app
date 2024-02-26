import explanation from '../utillity/Explanation';
import { useEffect, useState } from 'react';

const Dding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = Math.floor(Math.random() * explanation.length);

        return newIndex === prevIndex ? (newIndex + 1) % explanation.length : newIndex;
      });
    }, 3000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <p className=" py- text-slate-2 00 mb-6 text-center text-lg font-semibold dark:text-darkColor ">
      {explanation[index]}
    </p>
  );
};

export default Dding;
