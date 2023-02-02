/* crear contador con un bton para disminuir y otro para incrementar*/
/*el numero no puede ser menor a 0 y no puede ser mayor a 100 */
/*si el usuario intenta bajar de 0 que renderize junto al numero el mensaje "el numero no puede ser menor a 0" */
/* debes tener 4 botones uno que incremente en uno y otro que disminuya en 1 y otros de aumenten y disminuyen en 2 */

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementOnTwo = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const decrementOnTwo = () => {
    setCount((prevCount) => prevCount - 2);
  };

  return (
    <div>
      <p>{count}</p>
      {count == 0 ? <p>no puedes bajar mas</p> : ""}
      <button
        onClick={() => {
          if (count !== 100 && count < 100) {
            increment();
            console.log(count);
          }
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          if (count !== 0) {
            decrement();
          }
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          if (count !== 100 && count !== 99 && count < 100) {
            incrementOnTwo();
          }
        }}
      >
        incrementOnTwo
      </button>
      <button
        onClick={() => {
          if (count !== 1 && count !== 0 && !(count < 0)) {
            decrementOnTwo();
          }
        }}
      >
        decrementOnTwo
      </button>
    </div>

    /*si el usuario intenta bajar de 0 que renderize junto al numero el mensaje "el numero no puede ser menor a 0" */
  );
}
