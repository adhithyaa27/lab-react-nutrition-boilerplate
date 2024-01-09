import React, { useState } from 'react';

function FoodBox(props) {
  const { element } = props;
  const { img, name, cal } = element;

  const [input, setInput] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = () => {
    setQuantity(input);
  };

  return (
    <>
      <div className='root123'>
        <div className='div1'>
        <img src={img} alt="" />
        <div id='nameCal'>
          <span><b>{name}</b></span>
          <span>{cal}</span>
        </div>

        <input
          type="number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>

        <button onClick={updateQuantity}>+</button>

        </div>
        <div id='div2'>
        <p>
          {quantity} {name} = {quantity * cal} Calories
        </p>

        <button
          onClick={() => {
            setInput(0);
            setQuantity(0);
          }}
        >
          Reset
        </button>
        </div>
      </div>
    </>
  );
}

export default FoodBox;
