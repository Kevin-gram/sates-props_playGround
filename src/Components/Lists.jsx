import { useState } from "react";

function Lits({ cities }) {
  const [selected, SetSelected] = useState(-1);
  return (
    <div>
      <ul>
        {cities.map((item, index) => (
          <li
            key={item}
            className={
              selected === index ? "bg-blue-500 font-bold" : "font-normal"
            }
            onClick={() => SetSelected(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lits;
